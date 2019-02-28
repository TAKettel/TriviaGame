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
let A = 0;
let scoring = false;

let allQuestions = [{
    clue: "Which of Fry's romantic interests did not attend his funeral in The Sting?",
    firstA: "Michelle, his girlfriend in the year 2000.",
    secondA: "A radiator Fry mistook for a Miss Universe contestant",
    thirdA: "Morgan Proctor, the beaurocrat with a filth fetish.",
    fourthA: "Umbriel, the uppercrust mermaid from the lost city of Atlanta",
    correct: "ansFou",
    }, {
    clue: "What did Bender's monument on Osiris 4 say before shooting flames from its eyes?",
    firstA: "Bite my massive stony ass!",
    secondA: "It's been fun on a bun!",
    thirdA: "Remember me!",
    fourthA: "Up yours, meatbags!",
    correct: "ansThr",
    }, {
    clue: "Which of these memes uses actual dialogue spoken in the show?",
    firstA: "Shut up and take my money!",
    secondA: "Not sure if X or X.",
    thirdA: "Why not Zoidberg?",
    fourthA: "Simpsons Did It!",
    correct: "ansOne",
    }
];

function newGame() {
    // Reset all my figures.
    rightAnswers = 0;
    wrongAnswers = 0;
    A = 0;
    shuffle(allQuestions);
    nextQuestion();
};

// Fisher–Yates Shuffle, found on https://bost.ocks.org/mike/shuffle/
function shuffle(allQuestions) {
    var m = allQuestions.length, t, i;
      
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = allQuestions[m];
          allQuestions[m] = allQuestions[i];
          allQuestions[i] = t;
        }
        console.log(allQuestions);
        return allQuestions;
};

function nextQuestion() {
    if(A === allQuestions.length) {
        // If all questions have been asked, no addt array needed.
        gameOver()}
    else {
        // Ask the dang question.
    console.log(usedQuestions.length, allQuestions.length);
    console.log(allQuestions[A]);
    $("#timeSpace").html("Time remaining: <span id='time'> 15 </span> seconds");
    $("#topRow").html('<div class="col-0 col-md-2"></div>');
    $("#topRow").append('<button class="col-6 col-md-4 text-center" id="ansOne"></button>');
    $("#topRow").append('<button class="col-6 col-md-4 text-center" id="ansTwo"> Second Answer</button>');
    $("#bottomRow").html(
        '<div class="col-0 col-md-2"></div><button class="col-6 col-md-4 text-center" id="ansThr">Third Answer</button><button class="col-6 col-md-4 text-center" id="ansFou">Fourth Answer</button>'
    )
    $("#clueSpace").text(allQuestions[A].clue);
    $("#ansOne").text(allQuestions[A].firstA);
    $("#ansTwo").text(allQuestions[A].secondA);
    $("#ansThr").text(allQuestions[A].thirdA);
    $("#ansFou").text(allQuestions[A].fourthA);
    youreRight = false;
    scoring = false;
    // Replace timeSpace, clueSpace, and answer spaces. $().html and whatnot.
    startTimer();
    $("button").on("click", checkAns);
}};

$("button").on("click", checkAns);
function checkAns() {
    // No duplicate button clicks.
    if(scoring) {
        return;
    }
    console.log(this.id);
    scoring = true;
    if( this.id === allQuestions[A].correct) {
        youreRight = true;
    }
    result();
 }

function result() {
    clearInterval(timer);
    clockRunning = false;
    $("#timeSpace").text("Calculating...");
    // Go to the next question in the shuffled array.
    A++;
    if(youreRight) {
        $("#clueSpace").text("Good news, everyone! You're right!");
        rightAnswers++;
        } else {
        $("#clueSpace").text("Wrong again, idiot.");
        wrongAnswers++;
        };
    $("#topRow").html(" ");
    $("#bottomRow").html(" ");
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
    $("#topRow").html(
        "<div class='col-0 col-md-3'></div><div class='card col-12 col-md-6 text-center' id='clueSpace'>Final Score: <p id='finalRight'></p><p id='finalWrong'></p></div>"
    )
    $("#finalRight").text(rightAnswers + " correct answers.")
    $("#finalWrong").text(wrongAnswers + " incorrect answers.")
    $("#bottomRow").html(
        "<div class='row mx-auto'> <button class='jumbotron' id='replay'>Play again?</button></div>"
    )
    $("#replay").click(function() {
        newGame()
    });

    // Replace timeSpace, clueSpace, and answer spaces. $().html and whatnot.
    // timeSpace states You win or You Lose (if/else)
    // Give option to restart game.

};

function startTimer() {
    timeLeft = 14;
    if (!clockRunning) {
        timer = setInterval(countdown, 1000);
        clockRunning = true;
}};

function countdown() {
    $("#time").text(timeLeft);
    timeLeft--;
    // For some reason, jumps from 2 seconds to time up, so timeLeft can't be zero.
    if(timeLeft === -1) {
        result();
}};

newGame();


// STILL MISSING:
// No duplicates on questions.
// Flavor and flair (read: css).
// Getting rid of buttons between questions. (And bringing them back.)
// Changing the portfolio page to include this and why the heck not, the dino game, too.
// Fiddling with the portfolio links so they don't grey out.

// WHAT I'M PROUD OF SO FAR:
// Getting this far.
// Having the text replace correctly.
// Having the timer work the right way.
// Getting the randomizer to function with objects.
// Having the right answer button WORK.
// Shuffling (albeit with an established script, but i at least understand what it's saying.)