// *************************** Challenge #1 *********************************

function calNum(year) {
    return parseInt(year / 4, 10) - parseInt(year / 100, 10) + parseInt(year / 400, 10);
}

// Function to calculate the number
// of leap years in given range
function leapNum(l, r) {
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
    let days = ((year - age) * 365) + leapYears;
    document.getElementById('main').innerHTML = "You are " + days + " days old";
    document.getElementById('reset').style.display = "inline";
}

function reset() {
    document.getElementById('main').style.display = "none";
}

// *************************** Challenge #2 *********************************

let genrateBtn = document.getElementById('gen-btn');
let main = document.getElementById('main2');
let timeValue = null;
let stop1 = document.getElementById('stop');

function genrateImages() {
    var image = document.createElement('img');
    image.style.margin = "10px";
    image.src = "https://picsum.photos/200?" + new Date().getTime();
    main.appendChild(image);
    timeValue = setTimeout(genrateImages, 1000);
    stop1.style.display = "inline";
}

function stop() {
    clearTimeout(timeValue);
}

// *************************** Challenge #3 *********************************
var resetRps = document.getElementsByClassName('images');

function botChoice() {
    var num = Math.floor(Math.random() * 3);
    var arr = ['rock', 'paper', 'scissors'];
    return arr[num];
}

function decideWinner(human, bot) {
    var coditions = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0, }
    };

    var yourScore = coditions[human][bot];
    var computerScore = coditions[bot][human];

    return [yourScore, computerScore];
}

function finalMessage([yourScore]) {
    if (yourScore === 0) {
        return { 'message': 'You lost!', 'color': 'red' };
    }
    else if (yourScore === 0.5) {
        return { 'message': 'You Tied!', 'color': 'Yellow' };
    }
    else {
        return { 'message': 'You Win!', 'color': 'Green' };
    }
}

function rpsFrontEnd(human, bot, message) {

    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    //Remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    var resetbtn = document.getElementById('Refresh');

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<h2 style='font-family: poppins;'>Your choice</h2> <br> <img src='" + imageDatabase[human] + "' height = 150px width=150px style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<br> <br> <h1 style='color: " + message['color'] + "; font-size: 60px; padding: 30px; font-family: poppins;'>" + message['message'] + "</h1>";
    botDiv.innerHTML = "<h2>Bot choice</h2> <br> <img src='" + imageDatabase[bot] + "' height = 150px width=150px style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"

    document.getElementById('rps-div').appendChild(humanDiv);
    document.getElementById('rps-div').appendChild(messageDiv);
    document.getElementById('rps-div').appendChild(botDiv);

    resetbtn.style.display = "block";
    resetbtn.style.margin = "auto";
}

function rps(yourChoice) {
    var human = yourChoice.id;
    console.log("Your Choice: " + human);

    var bot = botChoice();
    console.log("Bot Choice: " + bot);

    var result = decideWinner(human, bot);
    console.log(result);

    var message = finalMessage(result);
    console.log(message);

    rpsFrontEnd(human, bot, message);
}

// *************************** Challenge #4 *********************************
let btndiv = document.getElementsByClassName('four-btn')[0];
let btns = btndiv.getElementsByTagName('button');

function btncolorChange(buttonThing){
    if(buttonThing.value === 'random'){
        random();
    } else if(buttonThing.value === 'red'){
        red();
    } else if(buttonThing.value === 'green'){
        green();
    } else{
        reset();
    }
}

function random() {
    let colors = ["#065535", "#ff0000", "#ffd700", "#ffa500",
        "#ff7373", "#800080", "#800000", "#00ff00",
        "#0e2f44", "#0e2f44", "#660066", "#420420",
        "#3399ff", "#008744", "#ffa700", "#d62d20"];

    for (let i = 0; i < btns.length; i++) {
        let randomnum = Math.floor(Math.random() * 16);
        let color = colors[randomnum];
        btns[i].style.backgroundColor = `${color}`;
    }
}

function red(){
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "red";
    }
}

function green(){
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "green";
    }
}
function reset(){
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "black";
    }
}