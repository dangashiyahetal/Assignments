function Calculate() {
  var x = 13;
  var y = 5;
  var sum = x + y;
  var multipy = x * y;
  var modulus = x % y;
  alert("Sum of " + x + " and " + y + " = " + sum);
  alert("multiply of " + x + " and " + y + " = " + multipy);
  alert("modulus of " + x + " and " + y + " = " + modulus);
}
function allfunctions() {
  sum();
  multiply();
  modulus();
}
function sum() {
  var x = 100;
  var y = 56;
  var sum = x + y;
  alert("sum of " + x + " and " + y + " = " + sum);
}

function multiply() {
  var x = 20;
  var y = 5;
  var multiply = x * y;
  alert("multiply " + x + " and " + y + " = " + multiply);
}

function modulus() {
  var x = 45;
  var y = 8;
  var modulus = x % y;
  alert("modulus " + x + " and " + y + " = " + modulus);
}
function question3() {
  alert(addition());
  alert(multiplication());
  alert(modulus1());
}
function addition() {
  var x = 50;
  var y = 6;
  return x + y;
}

function multiplication() {
  var x = 30;
  var y = 7;
  return x * y;
}

function modulus1() {
  var x = 30;
  var y = 4;
  return x % y;
}

// example of global variables
var x = 2;
var y = 4;
function add() {
  add(x + y);
  alert(add);
}

//  example of Local variable

function add1() {
  firstname = "john";
  lastname = "smith";
  add1(firstname + lastname);
  alert(add1);
}

var a = 5;
var b = 10;
function global_local() {
  var Z = 8;
  var F = 4;
  alert(a + b);
  alert(a * b);
  alert(a % b);
  alert(Z + F);
  alert(Z * F);
  alert(Z % F);
}

//Question 6
function sum2() {
  var x = 100;
  var y = 56;
  var sum = x + y;
  alert(sum);
}
function multi2() {
  var x = 30;
  var y = 7;
  alert(x * y);
}
function divide() {
  var x = 100;
  var y = 20;
  alert(x / y);
}
function modulus2() {
  var x = 100;
  var y = 56;
  alert(x % y);
}
function exponent() {
  var x = 4;
  var y = 2;
  alert(x ** 2);
}
// Question 7
var a = 5;
var b = 10;
function globaladd() {
  var c = a++;
  alert(c);
}
function globalsub() {
  var c = a--;
  alert(c);
}
function multiglobal() {
  var a = 10;
  alert(a * b);
}
// Q 7 ===c
function localfunctions() {
  var a = 10;
  alert(a + b);
  alert(a - b);
  alert(a / b);
  alert(a % b);
}
// f to c
function Fahtocel() {
  var F = 60;
  var C = ((F - 32) * 5) / 9;
  alert(C);
}

function display() {
  let name = "bruce";
  alert(name);
  name = "Wayne";
  alert(name);
}
