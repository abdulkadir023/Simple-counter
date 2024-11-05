let counter = document.getElementById('counter');


let increasebtn = document.getElementById('increasebtn');
let decreasebtn = document.getElementById('decreasebtn');
let resetbtn = document.getElementById('resetbtn');

let count = 0;

/* Increasing*/
increasebtn.onclick = function() {
    count++;

    counter.textContent = count;

    console.log(count);
}

/* Decreasing*/

decreasebtn.onclick = function() {
    count--;

    counter.textContent = count;

    console.log(count);
 }

 /* Reseting*/

 resetbtn.onclick = function() {

    count = 0;

    counter.textContent = count;
 }

