
//#Pseudo Code//
//1. Create a button to click -event listener- to start timer - DONE - 
//and show question div- HELP!!!
//hide start button after it is clicked once- DONE
//have timer begin countdown- DONE
//Create a submit button -DONE
    ///with add event listner- HELP WHAT AM I DOING HERE?
//have question div appear - HELP!!
//create an answers array? - DONE
//2. At click, first question appears - append object???????
//HOW DO I ORGANIZE QUESTIONS
//HOW DO I ASSIGN SCORES?
//IS INPUT FROM A PROMPT _ WHAT IS THE BEST WAY TO PULL IN SELECTION
//3. After input, next question appears
// 4. Wrong answers deduct 10 seconds from the clock
// 5. Quiz ends when all questions are answered OR when time runs out.
// 6. Quiz over - input score into High Score storage


//set variables//
var start = document.querySelector(".start")
var timeRemaining = 60
var answers = [];
var questionBox =document.createElement("div")
var finalScore = "";
const timerDisplay = document.querySelector("#time-shown")


//create EventListener for Start button//
start.addEventListener("click", function(){
    timeRemaining--;
    countDownText();
    questionAppear();
    start.style.display='none'
});
//Have timer start and end at 0//
function countDownText() {
    var myCounter=setInterval (function(){
        timerDisplay.textContent = timeRemaining
        timeRemaining--;
        if (timeRemaining===0) {
            clearInterval(timeDisplay)
            alert ("Times Up!"+"Your score is ???");
            return;
        };
    }, 1000)
}
//create a function to have a Question Appear//
function questionAppear () {
    document.body.children[3].appendChild(questionBox)
    questionBox.textContent= "QUESTION HERE"
    }
   




// var questions =
// {a: "What is a dog?", a1: "a piece of wood",  a2: "your BF", a3:"a chemical", a4: "a vacation"}
// {b: "Dogs Are Great", b1: "TRUE",  b2: "False"}
// {c: "Which of these is a dog?", c1: "Primate" c2: "Poodle" c3: "Arachnid" }

