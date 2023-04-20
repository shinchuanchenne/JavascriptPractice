var yourAge = prompt("What is your age right now?");

function calculateRemainAge(yourAge) {
  var remainAge = 90 - yourAge;
  var remainday = remainAge * 365;
  var remainWeek = remainAge * 52;
  var remainMonths = remainAge * 12;
  alert(
    "You have " +
      remainday +
      " days, " +
      remainWeek +
      " weeks, " +
      remainMonths +
      " months left."
  );
}

calculateRemainAge(yourAge);
