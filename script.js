
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
// 6. Quiz over - 
//CREATE a NEW WINDOW WITH FINAL SCORE AND DIV TO input INITIALS
//CREATE A "REGISTER YOUR SCORE" BUTTON
//CREATE a "click"
// High Scores into local storage
//WINDOWS TO SHOW HIGH SCORES?
//


//set variables//
var start = document.querySelector(".start")
var register = document.querySelector("#register")
var platter = document.querySelector(".question-platter")
var timeRemaining = 60
var answers = [];
var questionBoxH1 = document.querySelector(".question-box")
var choiceA = document.querySelector("#choice-a")
var choiceB = document.querySelector("#choice-b")
var choiceC = document.querySelector("#choice-c")
var choiceD = document.querySelector("#choice-d")
var finalScore = "";
const timerDisplay = document.querySelector("#time-shown")



//create EventListener for Start button//
start.addEventListener("click", function () {
    timeRemaining--;
    countDownText();
    // questionAppear();
    start.style.display = 'none'
    platter.style.display = 'block'
    populateQuestion();
});
//Have timer start and end at 0//
function countDownText() {
    var myCounter = setInterval(function () {
        timerDisplay.textContent = timeRemaining
        timeRemaining--;
        if (timeRemaining == 0) {
            clearInterval(myCounter)
            alert("Times Up!" + "Your score is ???");
            return;
        };
    }, 1000)
}



let questions = [{
    q: "What is a dog?",
    pickOne: [
        { select: "A) a piece of wood", correct: false },
        { select: "B) your BFF", correct: true },
        { select: "C) a chemical", correct: false },
        { select: "D) a vacation", correct: false }]
}, {
    q: "where is the giraffe",
    pickOne: [
        { select: "A) a piece of wood", correct: false },
        { select: "B) your BFF", correct: false },
        { select: "C) a chemical", correct: false },
        { select: "D) on vacation", correct: true}]
}, {
}]

function populateQuestion(){
    questionBoxH1.textContent=questions[0].q;
    choiceA.textContent=questions[0].pickOne[0].select;
    choiceB.textContent=questions[0].pickOne[1].select;
    choiceC.textContent=questions[0].pickOne[2].select;
    choiceD.textContent=questions[0].pickOne[3].select;
};


// // {b: "Dogs Are Great", b1: "TRUE",  b2: "False"}
// // {c: "Which of these is a dog?", c1: "Primate" c2: "Poodle" c3: "Arachnid" }

// register.addEventListener("click", function(event){
//    event.preventDefault();
//    console.log(event)
// });