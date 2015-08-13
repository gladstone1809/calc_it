/*var op = prompt('choose an operation');
console.log('op', op);

var num = prompt('choose an operation');
console.log('num', num);

var goodNum = parseFloat(num);

alert("Why is your console not open?");

//use console.log at each step */

var field1, field2, result;

 function input() {
    var field1 = document.getElementById('field1').value;

    var field2 = document.getElementById('field2').value;
}

function add() {
  input();
  result = console.log(field1) + console.log(field2);
  alert("RESULT: " + parseInt(result));
}

function mult() {
  input();
  result = console.log(field1) * console.log(field2);
  alert("RESULT: " + parseInt(result));
}

function div() {
  input();
  result = console.log(field1) / console.log(field2);
  alert("RESULT: " + parseInt(result));
}

function sub() {
  input();
  result = console.log(field1) - console.log(field2);
  alert("RESULT: " + parseInt(result));
}