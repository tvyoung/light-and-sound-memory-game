// global constants
const clueHoldTime = 500; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;

//generates new pattern for each game (sequence of 8)
function newPattern() {
  for (let i = 0; i < 8; i++) {
    pattern.push(Math.floor(Math.random() * 4) + 1);
  }
}

//clears pattern
function clearPattern() {
  pattern = [];
}

function startGame() {
  //create new pattern
  newPattern();
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  //clear pattern
  clearPattern();
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 200.6,
  2: 300.6,
  3: 400,
  4: 500.2
}

function playTone(btn,len) { 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn) {
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence() {
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++) { // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over! You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  //if guess is correct:
  if (pattern[guessCounter] == btn) {
    //if turn is over:
    if (guessCounter == progress) {
      //if this is the last turn:
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN
        winGame();
      //else not the last turn; increment progress
      } else {
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    //else turn is not over yet:
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  //else guess incorrect: lose game
  } else {
    //GAME OVER: LOSE
    loseGame();
  }
}

//shows answer key (current pattern)
function showAnswer() {
  document.getElementById("answerKey").classList.remove("hidden");
  //prints pattern order
  var text = document.getElementById("answerKey").innerHTML = pattern;
  //hide "Answer Key" button, show "Hide Answer Key" button
  document.getElementById("answerBtn").classList.add("hidden");
  document.getElementById("hideAnswerBtn").classList.remove("hidden");
}

//hides answer key
function hideAnswer() {
  document.getElementById("answerKey").classList.add("hidden");
  //clears text
  var text = document.getElementById("answerKey").innerHTML = "";
  //show "Answer Key button", hide "Hide Answer Key" button
  document.getElementById("answerBtn").classList.remove("hidden");
  document.getElementById("hideAnswerBtn").classList.add("hidden");
  
}