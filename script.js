// *************************** Challenge #1 *********************************

function calNum(year)
{
    return parseInt(year / 4, 10) - parseInt(year / 100, 10) + parseInt(year / 400, 10);
}

// Function to calculate the number
// of leap years in given range
function leapNum(l, r)
{
    l--;
    let num1 = calNum(r);
    let num2 = calNum(l);
    return num1 - num2;
}

function ageIndays() { 
    document.getElementById('main').style.display = "block";   
    let age = prompt("Enter your age in years ");
    let year = new Date().getFullYear();
    let leapYears = leapNum(age, year);
    let days = ((year - age)* 365) + leapYears;
    document.getElementById('main').innerHTML = "You are " + days + " days old";
    document.getElementById('reset').style.display = "inline";
}

function reset(){
    document.getElementById('main').style.display = "none";
}

// *************************** Challenge #2 *********************************

let genrateBtn = document.getElementById('gen-btn');
let main = document.getElementById('main2');
let timeValue = null;
let stop1 = document.getElementById('stop');

function genrateImages(){
    var image = document.createElement('img');
    image.style.margin = "10px";
    image.src = "https://picsum.photos/200?" + new Date().getTime();
    main.appendChild(image);
    timeValue = setTimeout(genrateImages, 1000);
    stop1.style.display = "inline";
}

function stop(){
    clearTimeout(timeValue);
}