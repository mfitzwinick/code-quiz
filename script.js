
//#Pseudo Code//

//hide start button after it is clicked once- DONE
//have timer begin countdown- DONE
///with add event listner for points and timer- HELP WHAT AM I DOING HERE?
//2. At click, first question appears - append object???????
//HOW DO I ORGANIZE QUESTIONS
//HOW DO I ASSIGN SCORES?
//IS INPUT FROM A PROMPT _ WHAT IS THE BEST WAY TO PULL IN SELECTION
//3. After input, next question appears
// 5. Quiz ends when all questions are answered OR when time runs out.


//CREATE A "REGISTER YOUR SCORE" BUTTON w/ move to local storage
// High Scores into local storage

//set variables//
var start = document.querySelector(".start")
var register = document.querySelector("#register")
var platter = document.querySelector(".question-platter")
var timeRemaining = 60
var startingScore = 0
var answers = [];
var questionBoxH1 = document.querySelector(".question-box")
var highscoreBox = document.querySelector(".highscore-box")
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
    start.style.display = 'none'
    platter.style.display = 'block'
    next();
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
            "A piece of wood",
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
        q: "What is a hotdog?",
        pickOne: [
            "gasfdsagsad",
            "asdsaFF",
            "aagsdical",
            "a asdadaation"],
        answers: "asdsaFF"
    }]
//create for loop for questions//_--------------------------------------------

function next() {
    for (var i = 0; i < questions.length; i++) {
        // var qBox =document.createElement("div")
        questionBoxH1.textContent = questions[i].q
        choiceA.textContent = questions[i].pickOne[0]
        choiceB.textContent = questions[i].pickOne[1]
        choiceC.textContent = questions[i].pickOne[2]
        choiceD.textContent = questions[i].pickOne[3]
    }
    if (questions == questions.length) {
        return;
    }

    // // }
    // // }
    // choiceA.addEventListener("click", function () {
    //     next();
    //     if (pickOne ("") = answers ("") {
    //         myScore.textContent = startingScore;
    //         startingScore + 10;
    //         alert("CORRECT!")
    //     }
    //     else {
    //         timeRemaining - 10;
    //         alert("INCORRECT ANSWER")
    //     };
    //     choiceB.addEventListener("click", function () {
    //         next();
    //         if (answers[i]=true) {
//                 myScore.textContent = startingScore;
//                 startingScore + 10;
//                 alert("CORRECT!")
//             }
//             else {
//                 timeRemaining - 10;
//                 alert("INCORRECT ANSWER")
//             };
//             choiceC.addEventListener("click", function () {
//                 next();
//                 if (answers[i]==true) {
//                     myScore.textContent = startingScore;
//                     startingScore + 10;
//                     alert("CORRECT!")
//                 }
//                 else {
//                     timeRemaining - 10;
//                     alert("INCORRECT ANSWER")
//                 };
//                 choiceD.addEventListener("click", function () {
//                     next();
//                     if (answers[i]=true) {
//                         myScore.textContent = startingScore;
//                         startingScore + 10;
//                         alert("CORRECT!")
//                     }
//                     else {
//                         timeRemaining - 10;
//                         alert("INCORRECT ANSWER")
//                     };
    //     questions[0].pickOne
    // }

    // //test(questions[0].pickOne, questions[0].answers)
    // next(q[2].questions[2].pickOne, questions[2].answers)
    // //create "click" function for Answer Choice//
    // clickAnswer.addEventListener("click", function () {
    //     next();
    //     scoreTally();
    // });

    // function populateQuestion(){
    //     questionBoxH1.textContent=questions[0].q;
    //     choiceA.textContent=questions[0].pickOne[0].select;
    //     choiceB.textContent=questions[0].pickOne[1].select;
    //     choiceC.textContent=questions[0].pickOne[2].select;
    //     choiceD.textContent=questions[0].pickOne[3].select;

    // };

    // function scoreTally() {
    //     for (var i = 0; i < questions.length; i++) {
    //     }
    //     if (ans === true) {
    //         myScore.textContent = startingScore;
    //         startingScore + 10;
    //         alert("CORRECT!")
    //     }
    //     if (ans === false) {
    //         timeRemaining - 10;
    //         alert("INCORRECT ANSWER")
    //     }
    // };


    // register.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     highscoreBox.appendChild(init);

    // });