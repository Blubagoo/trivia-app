let questionNumber = 0;
let score = 0;
let health = 6;
let rank = 0;

//what happens when you press the start button
function handleStartButton() {
//  console.log("button squelched");
  $('.start-page').on('click', '#start-button', event => {
    event.preventDefault();
//    console.log("starting quiz");
    startQuiz();
    
  });
}
//generate the quiz
function startQuiz() {
//  console.log('quiz loaded');
  $('.start-page').remove();
  $('#question-box').css('display', 'block');
  $('#score').text(score);
  $('.test-question-number').text(questionNumber+1);
  $('#health-bar').text(health);
  renderQuestion();
}
//render question
function renderQuestion() {
//  console.log('question rendered');
  $('#question-box').html(generateQuestion());
  userAnswer();
}
//generate the form
function generateQuestion() {
//  console.log('question function loaded');
  if(questionNumber < STORE.length) {
     return `<div class="question-text">
      <h3 id="question-banner">${STORE[questionNumber].question}</h3>
      <form role="form">
      <fieldset>
      <label for="answer">
      <input type="radio" tabindex="0" value="${STORE[questionNumber].answers[0]}" name="answer" required>
      <span>${STORE[questionNumber].answers[0]}</span>
      </label><br>
      <label for="answer">
      <input type="radio" tabindex="0" value="${STORE[questionNumber].answers[1]}" name="answer" required>
      <span>${STORE[questionNumber].answers[1]}</span>
      </label><br>
      <label for="answer">
      <input type="radio" tabindex="0" value="${STORE[questionNumber].answers[2]}" name="answer" required>
      <span>${STORE[questionNumber].answers[2]}</span>
      </label><br>
      <label for="answer">
      <input type="radio" tabindex="0" value="${STORE[questionNumber].answers[3]}" name="answer" required>
      <span>${STORE[questionNumber].answers[3]}</span>
      </label><br>
      <button type="submit" class="submit-button button" id="check-answer">Challenge the Boss!</button>
      </fieldset>
      </form>
      </div>`;
    }
    else {
//      console.log('quiz finished');
      feedbackGameOver();
    }
  }
//what happens when submit button is pressed
function userAnswer() {
  $('form').on('submit', function (event){
    event.preventDefault();
//    console.log('checking answer');
    let finalAnswer = $('input:checked');
    let answer = finalAnswer.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if(answer === correctAnswer) {
 //     console.log('answer right');
      incrementScore();
 //     console.log('giving feedback');
      feedbackRight();
    }
    else {
      ifAnswerWrong();
//      console.log('answer wrong giving feedback');
      feedbackWrong();
    }
  });
}

//increment score
function incrementScore() {
//  console.log('adding score to board');
  score+=100;
  $('#score').text(score);
  if(score >= 500) {
    incrementRank();
  }
 // console.log(rank);
}
//feedback right
function feedbackRight() {
  $('.question-text').remove();
  $('#question-box').html(
    `<div class="feedback-box">
    <img src="${STORE[questionNumber].img}" alt="${STORE[questionNumber].alt}" style="width:200px;height:200px;">
    <div="well center fdBackBox">
    <h3 id="feedback-banner">Good Job! The boss was defeated. Please proceed to the next level.</h3>
    <button type="submit" name="next-level" id="enter-button" class="button">Enter Here</button>
    </div>
    </div>`
    );
}
function incrementRank() {
  if(score===1000) {
    rank++;
  }
  else if(score===700){
    rank++;
  }
  else if (score === 500) {
    rank++; 
  }
}
//if answer wrong
function ifAnswerWrong() {
  decrementHealth();
//  console.log('done running callbacks');
}
//if answer is wrong
function decrementHealth() {
  health--;
  $('#health-bar').text(health);
}
//feedback wrong
function feedbackWrong() {
  $('.question-text').remove();
  $('#question-box').html(
    `<div class="feedback-box">
    <img src="${STORE[questionNumber].img}" alt="${STORE[questionNumber].alt}" style="width:200px;height:200px;">
    <div="well">
    <h4>The correct answer was ${STORE[questionNumber].correctAnswer}</h4>
    <h4>YOU DIED...</h4>
    <button type="submit" name="next-level" id="enter-button" class="button">Get Better!</button>
    </div>
    </div>`
    );
}
//increment questionNumber
function incrementQuestionNumber() {
  questionNumber++;
  if(questionNumber<10) {
    $('.test-question-number').text(questionNumber+1);
  }
}
//generate next question
function renderNextQuestion() {
  $('#question-box').on('click','#enter-button', function() {
    event.preventDefault();
    $('#hp-bar').text(health);
    $('.feedback-box').remove();
//    console.log('rendering next question');
//    console.log(questionNumber);
    if(questionNumber < 10) {
    incrementQuestionNumber();  
    }
    if(health <=0) {
      feedbackGameLoss();
    } else {
      renderQuestion();
    }
  });
}
//check for game loss
function checkLoss() {
//  console.log('checking for loss of game');
  if(health === 0) {
  feedbackGameLoss();
  }
}
function feedbackGameLoss() {
//  console.log(rank);
  $('.question-text').remove();
  $('#question-box').html(
    `<div class="feedback-box well">
    <div="well">
    <h3>You are no gamer!</h3>
    <h4>${rankResults[rank].ranking}</h4>
    <img src="${rankResults[rank].img}" alt="${rankResults[rank].alt}"><br>
    <button type="submit" name="next-level" id="restart-button" class="button">Play Again</button>
    </div>
    </div>`
    );
  $('#question-box').on('click', '#restart-button', function(event) {
    forceRestart();
  });
}
function forceRestart() {
  resetScore();
  resetHealth();
  resetLevel();
  resetRank();
  loadStartPage();
  $('.test-question-number').text(questionNumber+1);
  $('#health-bar').text(health);
  $('#xp-bar').text(score);
}
//reset the score
function resetScore() {
  score = 0;
}
//reset health
function resetHealth() {
  health = 6;
}
function resetLevel() {
  questionNumber = 0;
}
function resetRank() {
  rank = 0;
}
function feedbackGameOver() {
  $('#question-box').html(`
    <div class="feedback-box well">
    <div="well">
        <h4>${rankResults[rank].ranking}</h4>
    <img src="${rankResults[rank].img}" alt="${rankResults[rank].alt}"><br>
    <button type="submit" name="next-level" id="restart" class="button">Play Again!</button>
    </div>
    </div>`
    )
    $('#question-box').on('click', '#restart', function(event) {
    forceRestart();
  });
}


function loadStartPage() {
  $('.feedback-box').remove();
  $('.start-box').html(
    `<div class="start-page well">  
    <h4 class="start-q">So you're thinking that you have been playing games for a while? Let's find out.</h4>
    <button type="submit" class="start-b button" id="start-button">Enter Level 1</button>
    </div>`
    );
    handleStartButton();
}
//callback main Function
function runQuiz() {
  handleStartButton();
  userAnswer();
  renderNextQuestion();
}
$(runQuiz);
