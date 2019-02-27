// One question at a time. So question space will need to be replaced each time, for each question, and for both Correct and Incorrect results, and then for final results.
// How to store the questions? Array seems to be the way, but that's a LOT of information to put into an array. Plus we're NOT being asked to RANDOMIZE the questions or the answer options. But I might want to just do that anyway for the challenge.
// Reserve variables for: 
    // Total Correct Answers
    // Total Incorrect Answers
    // Timer
    // Should the questions be objects? And if YES, where should they be written?
            // HTML or inside the javascript? Objects in the HTML won't mess with the output on the screen, right?  Which would be preferable?
        // So that I write it out, and have it available to pull in chunks?

let rightAnswers;
let wrongAnswers;
let timeLeft = 15;
let question;
let usedQuestions = [];
let youreRight = false;
let nextTimer;
let clockRunning = false;
let A;
let scoring = false;

let allQuestions = [{
    clue: "Sample question text",
    firstA: "A: B",
    secondA: "B: C",
    thirdA: "C: A",
    fourthA: "D: D",
    correct: "ansTwo",
    }, {
    clue: "What did Bender's monument on Osiris 4 say before shooting flames from its eyes?",
    firstA: "Bite my massive stony ass!",
    secondA: "It's been fun on a bun!",
    thirdA: "Remember me!",
    fourthA: "Up yours, meatbags!",
    correct: "ansThr",
    }

];


function newGame() {
    // Reset all my figures.
    rightAnswers = 0;
    wrongAnswers = 0;
    usedQuestions.length = 0;
    nextQuestion();
};

function nextQuestion() {
    // Randomize question. Make sure it's not already been asked. Make sure all questions have been asked.
    if(usedQuestions.length === allQuestions.length) {
        //total number of questions = x
        gameOver()}
    else {
    A = Math.floor(Math.random() * allQuestions.length);
    usedQuestions.push(A);
    youreRight = false;
    scoring = false;
    console.log(usedQuestions.length, allQuestions.length);
    console.log(allQuestions[A]);
    $("#timeSpace").html("Time remaining: <span id='time'> 15 </span> seconds");
    $("#clueSpace").text(allQuestions[A].clue);
    $("#ansOne").text(allQuestions[A].firstA);
    $("#ansTwo").text(allQuestions[A].secondA);
    $("#ansThr").text(allQuestions[A].thirdA);
    $("#ansFou").text(allQuestions[A].fourthA);
    // Replace timeSpace, clueSpace, and answer spaces. $().html and whatnot.
    startTimer();
}};

$("button").click(function() {
    if(scoring) {
        return;
    }
    console.log(this.id);
    scoring = true;
    if( this.id === allQuestions[A].correct) {
        youreRight = true;
    }
    result();
 })

function result() {
    clearInterval(timer);
    clockRunning = false;
    $("#timeSpace").text("Calculating...");
    if(youreRight) {
        $("#clueSpace").text("Good news, everyone! You're right!");
        rightAnswers++;
        } else {
        $("#clueSpace").text("Wrong again, idiot.");
        wrongAnswers++;
        };
    nextTimer = setTimeout(nextQuestion, 4000);
    console.log(rightAnswers, wrongAnswers);
    // Replace timeSpace, clueSpace, and answer spaces. $().html and whatnot.
    // Congratulations -or- you missed. (if/else) As well as correct response.
    // Add to right/wrong counter. (if/else)
    // Auto-timer to nextQuestion();
};

function gameOver() {
    clearInterval(timer);
    clockRunning = false;
    if(rightAnswers > wrongAnswers) {
        $("#timeSpace").text("Congratulations, you're a credit to your species!")
    }
    else {
        $("#timeSpace").text("I don't want to live on this planet anymore.")
    };
    $("#clueSpace").text("GAME OVER");

    // Replace timeSpace, clueSpace, and answer spaces. $().html and whatnot.
    // timeSpace states You win or You Lose (if/else)

};

function startTimer() {
    timeLeft = 15;
    if (!clockRunning) {
        timer = setInterval(countdown, 1000);
        clockRunning = true;
}};

function countdown() {
    $("#time").text(timeLeft);
    timeLeft--;
    if(timeLeft === -1) {
        result();
}};

newGame();


// STILL MISSING:
// No duplicates on questions.
// Flavor and flair (read: css).
// Getting rid of buttons between questions. (And bringing them back.)

// WHAT I'M PROUD OF SO FAR:
// Getting this far.
// Having the text replace correctly.
// Having the timer work the right way.
// Getting the randomizer to function with objects.
// Having the right answer button WORK.