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
}

function reset(){
    document.getElementById('main').style.display = "none";
}