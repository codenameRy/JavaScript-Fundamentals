//Section Functions
//Challenge Rewrite the function using '?' or '||'
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

// checkAge(17)

//Solution 1 with ?
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?')
}

//Solution 2 with ||

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?')
}

// Challenge Function min(a, b)
// Write a function min(a,b) which returns the least of two numbers a and b.

//Solution 1 with If Else Statement or Ternary
function min(a, b) {
return (a < b) ? a : b;
}

console.log(min(4,3))

//Solution 2 with built in function Math.min
function min2(a, b) {
return Math.min(a,b)
}

console.log(min2(82.222,12.1133))

//Challenge Function pow(x,n)
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result. 
//pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

//Solution 1 with For Loop
function pow(x,n) {
  let result = x
  for (let i = 1; i < n; i++) {
    result *= x
  }
return result
}

console.log(pow(3,2))

//Solution 2 with built-in function Math.pow
function pow2(a,b) {
  return Math.pow(a,b)
}

console.log(pow2(3.3,3))

//Section Function Expressions

// Challenge Callback Function
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

//Rewrite with shorter syntax

function ask2(question, yes, no) {
  return confirm(question) ? yes() : no() 
}

ask2(
  `Do you agree?`,
  () => {alert( "You agreed." )},
  () => {alert( "You canceled the execution." )}
)

//Challenge

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now

//Rewrite

let age2 = prompt("What is your age?", 18);
let welcome2 = (age2 < 18) ?
  function () { alert("Hello!")} :
  function () {alert("Greetings!")}

  welcome2();