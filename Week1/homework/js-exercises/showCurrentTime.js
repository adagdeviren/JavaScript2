{
'use strict';

const body = document.body;

const timer = document.createElement('h1');

body.append(timer);


// takes date converts to string and appends to timer
const currentTime = () => {

let today = new Date();
let time = today.toLocaleTimeString();

timer.textContent = time;

}



setInterval(currentTime, 1000);


}