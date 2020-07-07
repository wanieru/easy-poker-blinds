var schedule = [];
var minPerRound = 0;

var currentLevel = 0;
var currentTime = 0;
var counting = false;

function update()
{
  $("#level").text(`Level ${currentLevel + 1}`);
  $("#blinds").text(`${schedule[currentLevel]}/${schedule[currentLevel] * 2}`);
  if(currentLevel < schedule.length - 1)
  {
    $("#timer").text(currentTime.toMMSS());
  }
  else
  {
    $("#timer").text("");
  }
  if(counting)
  {
    $("#timer").removeClass("text-warning");
  }
  else
  {
    $("#timer").addClass("text-warning");
  }
}
function tick()
{
  if(counting)
  {
    currentTime--;
    if(currentTime < 0)
    {
        currentTime = minPerRound * 60;
        currentLevel++;
        if(currentLevel >= schedule.length) currentLevel = schedule.length - 1;
    }
    update();
  }
}
function move(dir)
{
  currentLevel += dir;
  if(currentLevel >= schedule.length) currentLevel = schedule.length - 1;
  if(currentLevel < 0) currentLevel = 0;
  currentTime = minPerRound * 60;
  update();
}
setInterval(tick, 1000);

function go()
{
  var length = $("#length").val() * 60;
  var players = $("#players").val();
  var chips = $("#starting_amount").val();
  var base = $("#smallest_denomination").val();
  var rate = $("#rate").val();
  var starting_percentage = 0.01;

  var small_blind_goal1 = chips * 0.5 * 0.5; //Big blind ends up being half of all chips
  var small_blind_goal2 = chips * players * 0.5; //Big blind ends up being all chips in the game.

  schedule = [];
  var amount = approach(0, chips * starting_percentage, base);
  schedule.push(amount);
  while(amount < small_blind_goal1)
  {
    amount = approach(amount, amount * rate, base);
    schedule.push(amount);
  }
  var goal1_rounds = schedule.length - 1;
  while(amount < small_blind_goal2)
  {
    amount = approach(amount, amount * rate, base);
    schedule.push(amount);
  }

  var minute_step = 5;
  minPerRound = length / goal1_rounds;
  if(minPerRound < 10) minute_step = 2;
  minPerRound = Math.round(minPerRound / minute_step) * minute_step;
  if(minPerRound < minute_step) minPerRound = minute_step;

  $("#description").text(`Schedule for a ${players} player, ${length / 60} hour poker tournament with ${chips} starting chips and ${base} as the smallest denomination. Blind increment is around ${rate}x.`);
  $("#table-body").empty();
  var timer = 0;
  for(var i in schedule)
  {
      var level = parseInt(i) + 1;
      var small_blind = schedule[i];
      var big_blind = small_blind * 2;
      var time = (timer * 60).toMMSS();
      timer += minPerRound;

      var tr = $("<tr></tr>");
      tr.append(`<td>${level}</td>`);
      tr.append(`<td>${small_blind}</td>`);
      tr.append(`<td>${big_blind}</td>`);
      tr.append(`<td>${time}</td>`);
      $("#table-body").append(tr);
  }

  currentLevel = 0;
  currentTime = minPerRound * 60;
  counting = true;
  update();
  $(".initially_hidden").show();
  $(".settings").hide();
}
Number.prototype.toMMSS = function () {
    var sec = this;
    var minutes = Math.floor(sec / 60);
    var seconds = sec - (minutes * 60);
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds;
}
function next(prev, base)
{
  var exp = Math.log10(prev); //Get order of magnitude
  var rounded = Math.floor(exp); //Round down
  if(rounded < 1) rounded = 1; //Special case on <10
  var ten = Math.pow(10, rounded); //Get the 10 exponent corrosponding to this order of magnitude
  var coefficient = prev / ten;
  var nearest_half = Math.round(coefficient * 2) / 2;

  var increment = 0.5;

  nearest_half += increment;
  if(nearest_half > 5) nearest_half = 10;

  var final = Math.round(nearest_half * ten);
  if(final % base != 0) return next(final, base);

  return final;
}
function approach(start, target, base)
{
  var best = null;
  var dist = 0;
  while(start < target)
  {
      start = next(start, base);
      var new_dist = Math.abs(target - start);
      if(best == null || new_dist < dist)
      {
        best = start;
        dist = new_dist;
      }
  }
  return best;
}
function settings_button()
{
  counting = false;
  $(".initially_hidden").hide();
  $(".settings").show();
}
function toggle_button()
{
  counting = !counting;
  update();
}

$("#start_button").click(go);
$("#prev").click(function(){move(-1);});
$("#next").click(function(){move(1);});
$(".initially_hidden").hide();
$("#settings_button").click(settings_button);
$("#toggle_button").click(toggle_button);
