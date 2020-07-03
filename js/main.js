var schedule = [];
var minPerRound = 0;
function go()
{
  var length = $("#length").val() * 60;
  var chips = $("#starting_amount").val();
  var base = $("#smallest_denomination").val();
  var rate = $("#rate").val();
  var starting_percentage = 0.01;
  var end_percentage = 1;

  schedule = [];
  var amount = approach(0, chips * starting_percentage, base);
  schedule.push(amount);
  while(amount < chips * end_percentage)
  {
    amount = approach(amount, amount * rate, base);
    schedule.push(amount);
  }

  minPerRound = length / (schedule.length - 1);
  minPerRound = Math.round(minPerRound / 5) * 5;
  if(minPerRound < 5) minPerRound = 5;

  $("#description").text(`Schedule for ${length / 60} hour poker tournament with ${chips} starting chips and ${base} as the smallest denomination. Blind increment is ${rate}x.`);
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
  nearest_half += 0.5;
  if(nearest_half > 5) nearest_half = 10;

  var final = nearest_half * ten;
  if(final % base != 0) return next(final, base);

  return nearest_half * ten;
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

$("#start_button").click(go);
