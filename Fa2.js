function add() {
  var num1 = document.getElementById("myText").value;
  var num2 = document.getElementById("myText2").value;
  var sum = parseInt(num1) + parseInt(num2);
  document.getElementById("result").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;
}
function sub() {
    var num1 = document.getElementById("myText").value;
    var num2 = document.getElementById("myText2").value;
    var diff = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + diff;
  }
function mul() {
    var num1 = document.getElementById("myText").value;
    var num2 = document.getElementById("myText2").value;
    var prod = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML = "The product of " + num1 + " and " + num2 + " is " + prod;
  }
function div() {
    var num1 = document.getElementById("myText").value;
    var num2 = document.getElementById("myText2").value;
    var quot = parseInt(num1) / parseInt(num2);
    quot = quot.toFixed(2);
    document.getElementById("result").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + quot;
  }
function mod() {
    var num1 = document.getElementById("myText").value;
    var num2 = document.getElementById("myText2").value;
    var mod = parseInt(num1) % parseInt(num2);
    document.getElementById("result").innerHTML = "The remainder of " + num1 + " and " + num2 + " is " + mod;
  }
