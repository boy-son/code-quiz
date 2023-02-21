var startPage = document.getElementById('start-page');
var startButton = document.getElementById('startbtn');
var QuestionPage = document.getElementById('question-page');
var quizQuestion = document.getElementById('question');
var quizChoices = document.getElementById('answer-buttons');
var correct = document.getElementById('correct');
var incorrect = document.getElementById('incorrect');
var endPage = document.getElementById('end-page');
var finalScore = document.getElementById('final-score');
var initials = document.getElementById('initials');
var initialBtn = document.getElementById('init-submit')
var ScoreBoard = document.getElementById('score-board');
var playerScore = document.getElementById('player-score');
var navScore = document.getElementById('navScore')
var backButton = document.getElementById('back-button');
var clearScore = document.getElementById('clear-score');
var timer = document.getElementById('time-remaining');
var score = 0;
var timeRemaining;
var gameOver;
var highScores = [];
var shuffleQuestions;
var questionList = 0;

startButton.addEventListener('click', startGame);




var homePage = function () {
ScoreBoard.classList.remove('show')
ScoreBoard.classList.add('hide')    
startPage.classList.remove('hide')
startPage.classList.add('show')
gameOver = ""
questionList = 0;
timer.textContent = 0;
score= 0;

if (correct.className = 'show') {
correct.classList.remove('show')
correct.classList.add('hide')
}


if (incorrect.className = 'show') {
    incorrect.classList.remove('show')
    incorrect.classList.add('hide')
    }

};

var questions = [
    { q: 'What does HTML stand for?', 
      a: '3. Hyper Text Markup Language', 
      choices: [{choice: '1. Hyper Tank Malleable Language'}, {choice: '2. Home Trough Mix Language'}, {choice: '3. Hyper Text Markup Language'}, {choice: '4. Hewn Talk Murky Language'}]
    },
    { q: 'Inside which HTML element do we put the javascript?', 
      a: '3. <script>', 
      choices: [{choice: '1. <h1>'}, {choice: '2. <js>'}, {choice: '3. <script>'}, {choice: '4. <head>'}]
    },
    { q: 'What does CSS stand for?', 
      a: '1. Cascading Style Sheet', 
      choices: [{choice: '1. Cascading Style Sheet'}, {choice: '2. Caspers Super Soaker'}, {choice: '3. Correct Style Sheet'}, {choice: '4. Conquer Stone Sheet'}]
    },
    { q: 'What property do you use to add functionality to a button in Javascript?', 
      a: '2. addEventListener', 
      choices: [{choice: '1. click.button'}, {choice: '2. addEventListener'}, {choice: '3. nothing'}, {choice: '4. button.click'}]
    },
    { q: 'Why is Javascript used in coding?', 
      a: '4. To add functionality to a page', 
      choices: [{choice: '1. Because it is fun!'}, {choice: '2. To style a page'}, {choice: '3. To give structure to a page'}, {choice: '4. To add functionality to a page'}]
    },
    { q: 'What does the reset.css file do?', 
      a: '2. Removes built-in formatting by the browser', 
      choices: [{choice: '1. nothing'}, {choice: '2. Removes built-in formatting by the browser'}, {choice: '3. Refreshes the page'}, {choice: '4. Resets your style.css file'}]
    },
    { q: 'what would you use to decrement an element', 
      a: '1. element--', 
      choices: [{choice: '1. element--'}, {choice: '2. subtract.element'}, {choice: '3. element.subtract'}, {choice: '4. -element'}]
    },
  ];

  var setTime = function () {
  timeRemaining = 30;
  
  var timeCheck = setInterval(function() {
    timer.innerText= timeRemaining;
    timeRemaining--

    if(gameOver) {
    clearInterval(timeCheck);    
    }

    if(timeRemaining < 0) {
    showScore();
    timer.innerText = 0;
    clearInterval(timeCheck)    
    }

  }, 1000)
  
  }

var nextQuestion = function() {
    displayQuestion(shuffleQuestions[questionList])
}

// var resetAnswers = function() {
//     while (quizChoices.firstChild) {
//         quizChoices.removeChild(quizChoices.firstChild)
//     };
// };

  function startGame() {
    console.log('Started')
    startPage.classList.add('hide');
    startPage.classList.remove('show');
    QuestionPage.classList.remove('hide');
    QuestionPage.classList.add('show');
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    questionList = 0
    setTime()
    nextQuestion()
}


var displayQuestion = function(index) {
    quizQuestion.innerText = index.q
    for (var i = 0; i < index.choices.length; i++) {
        var choiceButton = document.createElement('button')
        choiceButton.innerText = index.choices[i].choice
        choiceButton.classList.add('button')
        choiceButton.classList.add('answerbutton')
        choiceButton.addEventListener("click", answerCheck)
        quizQuestion.appendChild(choiceButton)
        }
    };

var answerCorrect = function() {
        if (correct.className = "hide") {
            correct.classList.remove("hide")
            correct.classList.add("banner")
            incorrect.classList.remove("banner")
            incorrect.classList.add("hide")
            }
}

var answerIncorrect = function() {
    if (incorrect.className = "hide") {
        incorrect.classList.remove("hide")
        incorrect.classList.add("banner")
        correct.classList.remove("banner")
        correct.classList.add("hide")
    }
}

var answerCheck = function(event) {
    var currentAnswer = event.target
        if (shuffleQuestions[questionList].a === currentAnswer.innerText){
            answerCorrect();
            score = score + 10;
        }

        else {
          answerIncorrect();
          score = score - 5;
          timeRemaining = timeRemaining - 3;
      };

      questionList++
        if  (shuffleQuestions.length > questionList + 1) {
            nextQuestion();
        }   
        else {
           gameover = "true";
           showScore();
            }
}

var showScore = function () {
    QuestionPage.classList.add("hide");
    endPage.classList.remove("hide");
    endPage.classList.add("show");

    var scoreDisplay = document.createElement("p");
    scoreDisplay.classList.add('show');
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    finalScore.appendChild(scoreDisplay);
} 

var createScore = function(event) { 
    event.preventDefault() 
    var playerInitials = document.getElementById("initials").value;
    if (!playerInitials) {
      alert("Enter your intials!");
      return;
    }
    
     initials.reset()

    var highScore = {
        initials: playerInitials,
        score: score
        };
    
        highScores.push(highScore);
        highScores.sort((a, b) => {return b.score-a.score});
    
        while (playerScore.firstChild) {
            playerScore.removeChild(playerScore.firstChild)
         }
        
         for (var i = 0; i < highScores.length; i++) {
            var highscoreEntry = document.createElement("li");
            highscoreEntry.ClassName = "high-score";
            highscoreEntry.innerHTML = highScores[i].initials + " - " + highScores[i].score;
            playerScore.appendChild(highscoreEntry);
          }
         saveScore();
         displayScore();
        }


        var saveScore = function () {
            localStorage.setItem("HighScores", JSON.stringify(highScores))       
        }

        var loadScore = function() {
        var loadedScores = localStorage.getItem("HighScores")
        if(!loadedScores) {
        return false;    
        }
        loadedScores = JSON.parse(loadedScores)
        loadedScores.sort((a, b) => {return b.score-a.score})

        for (var i = 0; i < loadedScores.length; i++) {
            var highscoreEntry = document.createElement("li");
            highscoreEntry.ClassName = "high-score";
            highscoreEntry.innerText = loadedScores[i].initials + " - " + loadedScores[i].score;
            playerScore.appendChild(highscoreEntry);

            highScores.push(loadedScores[i]);
            
        }
    }
        var displayScore = function() {

            ScoreBoard.classList.remove("hide");
            ScoreBoard.classList.add("show");
            gameover = "true"
    
            if (endPage.className = "show") {
                endPage.classList.remove("show");
                endPage.classList.add("hide");
                }
            if (startPage.className = "show") {
                startPage.classList.remove("show");
                startPage.classList.add("hide");
                }
                
            if (QuestionPage.className = "show") {
                QuestionPage.classList.remove("show");
                QuestionPage.classList.add("hide");
                }

            if (correct.className = "show") {
                correct.classList.remove("show");
                correct.classList.add("hide");
            }
    
            if (incorrect.className = "show") {
                incorrect.classList.remove("show");
                incorrect.classList.add("hide");
                }
            
        }

        var clearScores = function () {
            highScores = [];
    
            while (playerScore.firstChild) {
                playerScore.removeChild(playerScore.firstChild);
            }
    
            localStorage.clear(highScores);
    
        } 
    
        loadScore();

       
      startButton.addEventListener("click", startGame);

      initialBtn.addEventListener("click", createScore);
    
      navScore.addEventListener("click", displayScore)
 
      backButton.addEventListener("click", homePage)
   
      clearScore.addEventListener("click", clearScores)
