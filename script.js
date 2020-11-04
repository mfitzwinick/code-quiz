
//#Pseudo Code//

//hide start button after it is clicked once- DONE
//have timer begin countdown- DONE
///with add event listner for points and timer- HELP WHAT AM I DOING HERE?
//2. At click, first question appears - append object???????
//HOW DO I ORGANIZE QUESTIONS
//HOW DO I ASSIGN SCORES?
//IS INPUT FROM A PROMPT _ WHAT IS THE BEST WAY TO PULL IN SELECTION
//3. After input, next question appears
// 4. Wrong answers deduct 10 seconds from the clock
// 5. Quiz ends when all questions are answered OR when time runs out.
// 6. Quiz over when last question finished- 

//CREATE A "REGISTER YOUR SCORE" BUTTON w/ move to local storage
// High Scores into local storage
//WINDOWS TO SHOW HIGH SCORES?
//


//set variables//
var start = document.querySelector(".start")
var register = document.querySelector("#register")
var platter = document.querySelector(".question-platter")
var timeRemaining = 60
var startingScore = 0
var answers = [];
var questionBoxH1 = document.querySelector(".question-box")
var choiceA = document.querySelector("#choice-a")
var choiceB = document.querySelector("#choice-b")
var choiceC = document.querySelector("#choice-c")
var choiceD = document.querySelector("#choice-d")
var finalScore = "";
const timerDisplay = document.querySelector("#time-shown")
var myScore = document.querySelector("#score")
var clickAnswer = document.querySelector(".button-choice")



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
        { select: "A) a piece of wood", ans: false },
        { select: "B) your BFF", ans: true },
        { select: "C) a chemical", ans: false },
        { select: "D) a vacation", ans: false }]
}, {
    q: "where is the giraffe",
    pickOne: [
        { select: "A) a piece of wood", ans: false },
        { select: "B) your BFF", ans: false },
        { select: "C) a chemical", ans: false },
        { select: "D) on vacation", ans: true}]
}, {
}]
clickAnswer.addEventListener("click", function () {
    timeRemaining--;
    countDownText();
    // questionAppear();
    populateQuestion();
    scoreTally();
});

function populateQuestion(){
    questionBoxH1.textContent=questions[0].q;
    choiceA.textContent=questions[0].pickOne[0].select;
    choiceB.textContent=questions[0].pickOne[1].select;
    choiceC.textContent=questions[0].pickOne[2].select;
    choiceD.textContent=questions[0].pickOne[3].select;
};

function scoreTally () {
    if (ans = true) {
        myScore.textContent=startingScore;
        startingScore=+10;
    }
    if (ans = false) {
        timeRemaining= -10;
    }
};


// // {b: "Dogs Are Great", b1: "TRUE",  b2: "False"}
// // {c: "Which of these is a dog?", c1: "Primate" c2: "Poodle" c3: "Arachnid" }

// register.addEventListener("click", function(event){
//    event.preventDefault();
//    console.log(event)
// });