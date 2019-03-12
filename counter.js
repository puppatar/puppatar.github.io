// here is a variable where we can store the value of the counter
let value = 0

// set the header to the initial value
document.querySelector('#value').innerHTML = value.toString()

// 1. add a handler for the `subtract` button
function minus(){
  value=-1
  document.querySelector('#value').innerHTML = value.toString()
}
function plus(){
  value=value+1
  document.querySelector('#value').innerHTML = value.toString()  
}
document.querySelector('#add').onclick = plus;

function minus(){
  value=value-1
  document.querySelector('#value').innerHTML = value.toString()  
}
document.querySelector('#subtract').onclick = minus;




// 2. add a handler for the `add` button

// 3. "DRY" your code out by making a function