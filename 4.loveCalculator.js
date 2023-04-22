prompt("What is your name?");
prompt("What is your finder's name?");

var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1; //1-100

if (n > 70) {
  alert(
    "Your love score is " +
      n +
      " %" +
      "You love each other like Kanye loves Kanye."
  );
}
if (n > 30 && n <= 70) {
  alert("Your love score is " + n + " %" + "You love each other like others.");
}
if (n <= 30) {
  alert(
    "Your love score is " + n + " %" + "You go together like oil and water."
  );
}
