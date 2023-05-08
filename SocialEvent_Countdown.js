"use strict";
// Run a command at  specofied interval
runClock();
setInterval("runClock()", 1000);

//Countdown Function
function runClock () 
{
//Track current day and time
var currentDay = new Date(); 
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

//Convert between a number and a text
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;


//Calculate the days until my next Social Event
var newYear = new Date("January 6, 2024");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDay) / (1000*60*60*24);

//Math method
var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);
}
//Send an alert
{
alert('Join my Creative Group!');
}
