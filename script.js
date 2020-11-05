
//#Pseudo Code//

//hide start button after it is clicked once- DONE
//have timer begin countdown- DONE
///with add event listner for points and timer- HELP WHAT AM I DOING HERE?
//2. At click, first question appears - append object???????


//CREATE A "REGISTER YOUR SCORE" BUTTON w/ move to local storage
// High Scores into local storage

//set variables//
var start = document.querySelector(".start")
var register = document.querySelector("#register")
var platter = document.querySelector(".question-platter")
var questionBoxH1 = document.querySelector(".question-box")
var highscoreBox = document.querySelector(".highscore-box")
var choiceA = document.querySelector("#choice-a")
var choiceB = document.querySelector("#choice-b")
var choiceC = document.querySelector("#choice-c")
var choiceD = document.querySelector("#choice-d")
const timerDisplay = document.querySelector("#time-shown")
var myScore = document.querySelector("#score")
var clickAnswer = document.querySelector(".button-choice")
var timeRemaining = 60
var startingScore = 0
var answers = [];
var finalScore = "";

//create EventListener for Start button//
start.addEventListener("click", function () {
    timeRemaining--;
    countDownText();
    start.style.display = 'none'
    platter.style.display = 'block'
    next(0);
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

//create Q & A in object array//
var questions = [
    {
        q: "What is a dog?",
        pickOne: [
            "a shoe",
            "your BFF",
            "a chemical",
            "a vacation"],
        answers: "your BFF"
    },
    {
        q: "where is the giraffe",
        pickOne: [
            " a piece of wood",
            "your BFF",
            "a chemical",
            "on vacation"],
        answers: "on vacation"

    },
    {
        q: "What is a nugo?",
        pickOne: [
            "gasfdsagsad",
            "asdsaFF",
            "aagsdical",
            "a asdadaation"],
        answers: "asdsaFF"
    }]
//create a function to populate Q&A//

var currentQuestion = 0
function next(i) {
    currentQuestion = i
    questionBoxH1.textContent = questions[i].q
    choiceA.textContent = questions[i].pickOne[0]
    choiceB.textContent = questions[i].pickOne[1]
    choiceC.textContent = questions[i].pickOne[2]
    choiceD.textContent = questions[i].pickOne[3]
    currentQuestion = i + 1
    if (i == questions.length - 1) {
        return;
    }
};
//program each ANSWER BUTTON with EventListner and if/else//
choiceA.addEventListener("click", function () {
    if (questions[i].pickOne[0] === questions[i].answers[0]) {
        startingScore +=10;
        alert("CORRECT!")
    }
    else {
        timeRemaining -=10;
        alert("INCORRECT ANSWER")
    };
    next(currentQuestion);
})

choiceB.addEventListener("click", function () {
    if (questions[i].pickOne[1] === questions[i].answers[1]) {
        myScore.textContent = startingScore;
        startingScore +=10;
        alert("CORRECT!")
    }
    else {
        timeRemaining -=10;
        alert("INCORRECT ANSWER")
    };
    next(currentQuestion);
})


choiceC.addEventListener("click", function () {
    if (questions[currentQuestion].pickOne[2]("") === questions[currentQuestion].answers[2]("")) {
        myScore.textContent = startingScore;
        startingScore +=10;
        alert("CORRECT!")
    }
    else {
        timeRemaining -=10;
        alert("INCORRECT ANSWER")
    };
    next(currentQuestion);
})
choiceD.addEventListener("click", function () {
    if (questions[currentQuestion].pickOne[3] === questions[currentQuestion].answers[3]) {
        myScore.textContent = startingScore;
        startingScore +=10;
        alert("CORRECT!")
    }
    else {
        timeRemaining -=10;
        alert("INCORRECT ANSWER")
    };
    next(currentQuestion);
})



    // register.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     highscoreBox.appendChild(init);

    // });