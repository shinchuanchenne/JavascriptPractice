var height = prompt("How tall are you?(metres)");
var weight = prompt("How weight are you?(kilograms)");

function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  return Math.round(bmi);
}

var bmi = bmiCalculator(weight, height);

if (bmi < 18.5) {
  alert("Your BMI is " + bmi + " , so you are underweight.");
} else if (bmi >= 18.5 && bmi < 24.9) {
  alert("Your BMI is " + bmi + " , so you have a normal weight.");
} else {
  alert("Your BMI is " + bmi + " , so you are overweight.");
}
