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
        return { 'message': 'You lost!', 'color': '#ff5050' };
    }
    else if (yourScore === 0.5) {
        return { 'message': 'You Tied!', 'color': '#ffd500' };
    }
    else {
        return { 'message': 'You Win!', 'color': '#26af26' };
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

    const mediaQuery = window.matchMedia('(max-width: 540px)')
    if (mediaQuery.matches) {
        document.getElementById('rps-div').style.flexDirection = "column";
        document.getElementById('Refresh').style.margin = "40px auto";
    }
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

function btncolorChange(buttonThing) {
    if (buttonThing.value === 'random') {
        random();
    } else if (buttonThing.value === 'red') {
        red();
    } else if (buttonThing.value === 'green') {
        green();
    } else {
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

function red() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "red";
    }
}

function green() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "green";
    }
}
function reset() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "black";
    }
}


// *************************** Challenge #5 *********************************
let blackJackGame = {
    'you': { 'scoreSpan': '#yourblackjack-result', 'div': '.your_box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealerblackjack-result', 'div': '.dealer_box', 'score': 0 },
    'card': ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    'cardMap': {
        "0": [1, 11], "1": 2, "2": 3, "3": 4, "4": 5, "5": 6,
        "6": 7, "7": 8, "8": 9, "9": 10, "10": 10, "11": 10, "12": 10
    },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];

const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/win.mp3');
const loseSound = new Audio('sounds/lost.mp3');
const drawSound = new Audio('sounds/draw.wav');

document.querySelector('#black_jack_hit_button').addEventListener('click', blackjackHit);
document.querySelector('#black_jack_stand_button').addEventListener('click', dealerLogic);
document.querySelector('#black_jack_deal_button').addEventListener('click', blackjackDeal);

// Main Function
function blackjackHit() {
    if (blackJackGame['isStand'] === false) {
        let card = randomCard();
        updateScore(card, YOU);
        showScore(YOU);
        showCard(card, YOU);
    }
}
// Main Function

//Function to pick random card among all cards
function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackJackGame['card'][randomIndex];
}

// Random card is drawn 
// This function To show card on frontEnd 
function showCard(card, activePlayer) {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const mediaQuery1 = window.matchMedia('(max-width: 384px)')

    if(mediaQuery1.matches){
        console.log("Media query matches 384px");
        if (activePlayer['score'] <= 21) {
            let cardImage = document.createElement('img');
            cardImage.src = `img/cards/${card}.png`;
            cardImage.style.width = "2.8rem";
            cardImage.style.margin = "4px 10px";
            document.querySelector(activePlayer['div']).appendChild(cardImage);
            hitSound.play();
        }
    }
    else if (mediaQuery.matches) {
        console.log("Media query matches 767px");
        if (activePlayer['score'] <= 21) {
            let cardImage = document.createElement('img');
            cardImage.src = `img/cards/${card}.png`;
            cardImage.style.width = "4rem";
            cardImage.style.margin = "6px 15px";
            document.querySelector(activePlayer['div']).appendChild(cardImage);
            hitSound.play();
        }
    }
    else {
        if (activePlayer['score'] <= 21) {
            let cardImage = document.createElement('img');
            cardImage.src = `img/cards/${card}.png`;
            cardImage.style.width = "6rem";
            cardImage.style.margin = "10px 20px";
            document.querySelector(activePlayer['div']).appendChild(cardImage);
            hitSound.play();
        }
    }
}

//Function For after clicking DEAL button
function blackjackDeal() {
    if (blackJackGame['turnsOver'] === true) {
        blackJackGame['isStand'] = false;
        let yourImages = document.querySelector('.your_box').querySelectorAll('img');
        let dealerImages = document.querySelector('.dealer_box').querySelectorAll('img');

        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#yourblackjack-result').textContent = 0;
        document.querySelector('#dealerblackjack-result').textContent = 0;

        document.querySelector('#yourblackjack-result').style.color = "#fff";
        document.querySelector('#dealerblackjack-result').style.color = "#fff";

        document.querySelector('.sub__title').textContent = "Let's Play";
        document.querySelector('.sub__title').style.color = "black";

        blackJackGame['turnsOver'] = true;
    }
}

//Update Score at backEnd
function updateScore(card, activePlayer) {
    if (card == "0") {
        if (activePlayer['score'] + blackJackGame['cardMap'][card][1] <= 21) {
            activePlayer['score'] += blackJackGame['cardMap'][card][1];
        } else {
            activePlayer['score'] += blackJackGame['cardMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackJackGame['cardMap'][card];
    }
}

//To show score on FRONTEND
function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = "Bust!";
        document.querySelector(activePlayer['scoreSpan']).style.color = "red";
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

//After we click Stand button ... function is for to stop bot for 1 sec
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// To play Bot Automatic 
async function dealerLogic() {
    blackJackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackJackGame['isStand'] === true) {
        let card = randomCard();
        updateScore(card, DEALER);
        showScore(DEALER);
        showCard(card, DEALER);
        await sleep(1000);
    }

    blackJackGame['turnsOver'] = true;
    showResult(computeWinner());
}

// Decide winner at BACKEND
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            blackJackGame['wins']++;
            winner = YOU;
        }
        else if (YOU['score'] < DEALER['score']) {
            blackJackGame['losses']++;
            winner = DEALER;
        }

        else if (YOU['score'] === DEALER['score']) {
            blackJackGame['draws']++;
        }
    }

    else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackJackGame['losses']++;
        winner = DEALER;
    }

    else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackJackGame['draws']++;
    }

    console.log("Winner is ", winner);
    return winner;
}

//Show winner On FrontEnd
function showResult(winner) {
    let message, messageColor;

    if (blackJackGame['turnsOver'] === true) {
        if (winner === YOU) {
            document.querySelector('#wins').textContent = blackJackGame['wins'];
            message = "You Win!";
            messageColor = "green";
            winSound.play();

        } else if (winner === DEALER) {
            document.querySelector('#lost').textContent = blackJackGame['losses'];
            message = "You Lost!";
            messageColor = "red";
            loseSound.play();
        } else {
            document.querySelector('#draw').textContent = blackJackGame['draws'];
            message = "You Drew!";
            messageColor = "#00ff08";
            drawSound.play();
        }

        document.querySelector('.sub__title').textContent = message;
        document.querySelector('.sub__title').style.color = messageColor;
    }
}