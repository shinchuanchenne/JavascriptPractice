var height = prompt("How tall are you?(metres)");
var weight = prompt("How weight are you?(kilograms)");

function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  return Math.round(bmi);
}

var bmi = bmiCalculator(weight, height);
alert("Your BMI is " + bmi + ".");
