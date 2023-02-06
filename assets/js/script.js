var startPageEl = document.getElementById('startPage');
var qPageEl = document.getElementById('questionPage');
var timerEl = document.getElementById('timer');
var correctEl = document.getElementById('correct')
var inCorrectEl = document.getElementById('incorrect')
var startEl = document.getElementById('startButton');
var recordEl = document.getElementById('recordScore')
var nameEl = document.getElementById('enterName')
var submitEl = document.getElementById('submitButton')
var scoreEl = document.getElementById('scoreBoard')
var goBackEl = document.getElementById('goBack')
var clearEl = document.getElementById('clearScore')
var playerScoreEl = document.getElementById('playerScore')
var score=0;
var timeleft;
var gameover;
var HighScores = [];
timerEl.innertext= 0


var questions = [
    { q: 'Arrays in Javascript can be used to store __________.', 
      a: '4. all of the above', 
      choices: [{choice: '1. numbers'}, {choice: '2. booleans'}, {choice: '3. strings'}, {choice: '4. all of the above'}]
    },
    { q: 'Inside which HTML element do we put the javascript?', 
      a: '3. <script>', 
      choices: [{choice: '1. <h1>'}, {choice: '2. <js>'}, {choice: '3. <script>'}, {choice: '4. <head>'}]
    },
    { q: 'In the code -- setinterval(time(),1000) -- what is time()?', 
      a: '1. callback function', 
      choices: [{choice: '1. callback function'}, {choice: '2. undefined'}, {choice: '3. variable'}, {choice: '4. all of the above'}]
    },
    { q: 'What syntax would call a function?', 
      a: '4. function()', 
      choices: [{choice: '1. var function'}, {choice: '2. function'}, {choice: '3. call function'}, {choice: '4. function()'}]
    },
    { q: 'When did javascript first appear?', 
      a: '1. 1995', 
      choices: [{choice: '1. 1995'}, {choice: '2. Roaring twenties'}, {choice: '3. 2005'}, {choice: '4. 2000'}]
    },
    { q: 'What does DOM stand for?', 
      a: '2. Document Object Model', 
      choices: [{choice: '1. Do Overnight Modules'}, {choice: '2. Document Object Model'}, {choice: '3. Divas Obviously Model'}, {choice: '4. Do Oo Mo'}]
    },
    { q: 'What is getItem commonly used for?', 
      a: '2. local storage', 
      choices: [{choice: '1. adding drama'}, {choice: '2. local storage'}, {choice: '3. online shopping'}, {choice: '4. naming a variable'}]
    },
  ];
  
  var setTime = function () {
    timeleft = 30;

var timercheck = setInterval(function() {
    timerEl.innerText = timeleft;
    timeleft--

    if (gameover) {
        clearInterval(timercheck)
    }
   
    if (timeleft < 0) {
        showScore()
        timerEl.innerText = 0
        clearInterval(timercheck)
    }

    }, 1000)
}

var showScore = function () {

}

var CreateHighScore = function(event) {
event.preventDefault()
var playerName = document.querySelector("#enterName").value;
if(!playerName) {
alert("Enter your name!");
return;  
}
nameEl.reset();
}


var HighScore = {
  playerName: playerName,
  score: score
  } 

HighScores.push(HighScore);
HighScores.sort((a, b) => {return b.score-a.score});

for (var i = 0; i < HighScores.length; i++) {
  var highscoreEl = document.createElement("li");
  highscoreEl.ClassName = "high-score";
  highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
  playerScoreEl.appendChild(highscoreEl);
}

var saveHighScore = function () {
  localStorage.setItem("HighScores", JSON.stringify(HighScores))
}

var loadHighScore = function () {
  var LoadedHighScores = localStorage.getItem("HighScores")
      if (!LoadedHighScores) {
      return false;
  }

  LoadedHighScores = JSON.parse(LoadedHighScores);
  LoadedHighScores.sort((a, b) => {return b.score-a.score})


  for (var i = 0; i < LoadedHighScores.length; i++) {
      var highscoreEl = document.createElement("li");
      highscoreEl.ClassName = "high-score";
      highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
      scoreEl.appendChild(highscoreEl);

      HighScores.push(LoadedHighScores[i]);
      
  }
}

var displayHighScores = function() {

  scoreEl.classList.remove("hide");
  scoreEl.classList.add("show");
  gameover = "true"

  if (recordEl.className = "show") {
      recordEl.classList.remove("show");
      recordEl.classList.add("hide");
      }
  if (startPageEl.className = "show") {
      startPageEl.classList.remove("show");
      startPageEl.classList.add("hide");
      }
      
  if (qPageEl.className = "show") {
      qPageEl.classList.remove("show");
      qPageEl.classList.add("hide");
      }

  if (correctEl.className = "show") {
      correctEl.classList.remove("show");
      correctEl.classList.add("hide");
  }

  if (inCorrectEl.className = "show") {
      inCorrectEl.classList.remove("show");
      inCorrectEl.classList.add("hide");
      }
  
}
var clearScores = function () {
  HighScores = [];

  while (playerScoreEl.firstChild) {
      playerScoreEl.removeChild(playerScoreEl.firstChild);
  }

  localStorage.clear(HighScores);

} 

loadHighScore()

