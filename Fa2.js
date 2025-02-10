function addition() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  var sum = parseInt(num1) + parseInt(num2);
  document.getElementById("output").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;
}

function subtraction() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  var diff = parseInt(num1) - parseInt(num2);
  document.getElementById("output").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + diff;
}

function multiplication() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  var prod = parseInt(num1) * parseInt(num2);
  document.getElementById("output").innerHTML = "The product of " + num1 + " and " + num2 + " is " + prod;
}

function division() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  var quot = parseInt(num1) / parseInt(num2);
  quot = quot.toFixed(2);
  document.getElementById("output").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + quot;
}

function modulus() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  var mod = parseInt(num1) % parseInt(num2);
  document.getElementById("output").innerHTML = "The remainder of " + num1 + " and " + num2 + " is " + mod;
}
