function go()
{
  var length = $("#length").val() * 60;
  var chips = $("#starting_amount").val();
  var base = $("#smallest_denomination").val();
  var rate = $("#rate").val();
  var starting_percentage = 0.01;
  var end_percentage = 1;

  var rounds = [];
  var amount = approach(0, chips * starting_percentage, base);
  rounds.push(amount);
  while(amount < chips * end_percentage)
  {
    amount = approach(amount, amount * rate, base);
    rounds.push(amount);
  }
  console.log(rounds);

  var minPerRound = length / (rounds.length - 1);
  minPerRound = Math.round(minPerRound / 5) * 5;
  if(minPerRound < 5) minPerRound = 5;
  console.log(minPerRound);
}
function next(prev, base)
{
  var exp = Math.log10(prev); //Get order of magnitude
  var rounded = Math.floor(exp); //Round down
  if(rounded < 1) rounded = 1;
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
