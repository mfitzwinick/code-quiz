
//#Pseudo Code//
//1. Create a button to click -event listener- to start quiz
//hide start button after it is clicked once
//have timer begin countdown
//Create a submit button with add event listner
//have question div appear
//create an answers array?
//2. At click, first question appears - append object?
//3. After input, next question appears
// 4. Wrong answers deduct 10 seconds from the clock
// 5. Quiz ends when all questions are answered OR when time runs out.
// 6. Quiz over - input score into High Score storage

var start = document.querySelector(".start")
var timeRemaining = 60
const timerDisplay = document.querySelector("#time-shown")
var answers = [];


start.addEventListener("click", function(){
    timeRemaining--;
    countDownText();
    start.style.display='none'
});

function countDownText() {
    var myCounter=setInterval (function(){
        timerDisplay.textContent = timeRemaining
        timeRemaining--;
        if (timeRemaining<=0) {
            clearInterval(myCounter)
            alert ("Times Up!"+"Your score is ???");
            return;
        };
    }, 1000)
}


// var questions =
// {a: "What is a dog?", a1: "a piece of wood",  a2: "your BF", a3:"a chemical", a4: "a vacation"}
// {b: "Dogs Are Great", b1: "TRUE",  b2: "False"}
// {c: "Which of these is a dog?", c1: "Primate" c2: "Poodle" c3: "Arachnid" }

