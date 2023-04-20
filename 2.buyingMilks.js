var money = prompt("How much money will you give me?");
var costPerBottle = prompt("How much is the milk?");
function getMilk(money, costPerBottle) {
  var numberOfBottles = Math.floor(money / costPerBottle);
  return numberOfBottles;
}
function calcChange(money, costPerBottle) {
  var change = money % costPerBottle;
  return change;
}
var numberofBottles = getMilk(money, costPerBottle);
var change = calcChange(money, costPerBottle);
alert(
  "Hello master, here is your " +
    numberofBottles +
    " bottles of milk and here is your " +
    change +
    " change."
);
