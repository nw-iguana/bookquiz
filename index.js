  // In-memory database of questions (static questions data)
const QUESTIONS = [
  {
    number: 1,
    questionText: `Who wrote The Three Musketeers?`,
    firstAnswer: "Victor Hugo",
    secondAnswer: "Alexandre Dumas",
    thirdAnswer: "Albert Camus",
    fourthAnswer: "Marcel Proust",
    correctAnswer: "Alexandre Dumas" // Not sure if this is a good way to set this property.
  },
  {
    number: 2,
    questionText: `Who wrote Little Women?`,
    firstAnswer: "Edith Wharton",
    secondAnswer: "Louisa May Alcott",
    thirdAnswer: "Charlotte Bronte",
    fourthAnswer: "Emily Bronte",
    correctAnswer: "Louisa May Alcott"
  },

  {
    number: 3,
    questionText: `Who wrote Frankenstein?`,
    firstAnswer: "Bram Stoker",
    secondAnswer: "Robert Louis Stevenson",
    thirdAnswer: "Oscar Wilde",
    fourthAnswer: "Mary Shelley",
    correctAnswer: "Mary Shelley"
  },

  {
    number: 4,
    questionText: `Who wrote One Hundred Years of Solitude?`,
    firstAnswer: "Miguel de Cervantes",
    secondAnswer: "Federico Garcia Lorca",
    thirdAnswer: "Gabriel Garcia Marquez",
    fourthAnswer: "Jorge Louis Borges",
    correctAnswer: "Gabriel Garcia Marquez"
  },

  {
    number: 5,
    questionText: `Who wrote Fahrenheit 451?`,
    firstAnswer: "Kurt Vonnegut",
    secondAnswer: "Aldous Huxley",
    thirdAnswer: "George Orwell",
    fourthAnswer: "Ray Bradbury",
    correctAnswer: "Ray Bradbury"
  },

  {
    number: 6,
    questionText: `Who wrote Crime and Punishment?`,
    firstAnswer: "Vladimir Nabokov",
    secondAnswer: "Mikhail Bulgakov",
    thirdAnswer: "Fyodor Dostoyevsky",
    fourthAnswer: "Leo Tolstoy",
    correctAnswer: "Fyodor Dostoyevsky"
  },

  { 
    number: 7,
    questionText: `Who wrote Great Expectations?`,
    firstAnswer: "Jane Austen",
    secondAnswer: "Charles Dickens",
    thirdAnswer: "Mark Twain",
    fourthAnswer: "Nathaniel Hawthorne",
    correctAnswer: "Charles Dickens"
  },

  {
    number: 8,
    questionText: `Who wrote Moby Dick?`,
    firstAnswer: "Herman Melville",
    secondAnswer: "Ernest Hemingway",
    thirdAnswer:  "John Steinbeck",
    fourthAnswer: "Joseph Conrad",
    correctAnswer: "Herman Melville"
  },

  {
    number: 9,
    questionText: `Who wrote The Picture of Dorian Grey?`,
    firstAnswer: "Mary Shelley",
    secondAnswer:  "Bram Stoker",
    thirdAnswer: "Oscar Wilde",
    fourthAnswer:  "Arthur Conan Doyle",
    correctAnswer: "Oscar Wilde"
  },

  {
    number: 10,
    questionText: `Who wrote The Great Gatsby?`,
    firstAnswer: "F. Scott Fitzgerald",
    secondAnswer: "William Faulkner",
    thirdAnswer: "William Golding",
    fourthAnswer: "Ian Fleming",
    correctAnswer: "F. Scott Fitzgerald"
  },
];



// Create your initial store (track progress overtime)
const STORE = {
    viewIndex: 0,
    viewStatus: "start",
    score: 0,
};

// Rendering functions (Reads STORE, calls generators, then adds HTML to DOM) FELIX

function renderStart() {
  let html = generateStartView();
  $('.view').html(html);
}

function renderQuestion() {
  let questionText = QUESTIONS[STORE.viewIndex].questionText;
  let firstAnswer = QUESTIONS[STORE.viewIndex].firstAnswer;
  let secondAnswer = QUESTIONS[STORE.viewIndex].secondAnswer;
  let thirdAnswer = QUESTIONS[STORE.viewIndex].thirdAnswer;
  let fourthAnswer = QUESTIONS[STORE.viewIndex].fourthAnswer;
  let html = generateQuestion(questionText, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer)
  let statusHTML = generateStatus();
  $('.status').html(statusHTML);
  $('.view').html(html);
}

function renderIncorrectAnswer() {
  let correctAnswer = QUESTIONS[STORE.viewIndex].correctAnswer;
  let html = generateAnswerforIncorrect(correctAnswer);
  $('.view').html(html);
}

/*function renderStatus() {
  let statusHTML = generateStatus();
  $('.status').html(statusHTML);
  };
} */


// Template generators (generates HTML based on data) FELIX
function generateStartView() {
  return `<h1>CLASSIC LITERATURE QUIZ</h1>
  <h2>Ready to test your knowledge of classic literature authors?</h2>
 <button class="start-button">Start Quiz</button>`;
}


function generateQuestion(question, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer) {
  let htmlQuestion = 
  `<p>${question}</p>
    <form class="answeroptions">
     <input type="radio" name="answer"checked value="${firstAnswer}" required><label for="choice1">${firstAnswer}</label> 
     <input type="radio" name="answer" value="${secondAnswer}" required><label for="choice2"></label>${secondAnswer}</label>
     <input type="radio" name="answer" value="${thirdAnswer}" required><label for="choice3"></label>${thirdAnswer}</label>
     <input type="radio" name="answer" value="${fourthAnswer}" required><label for="choice4"></label>${fourthAnswer}</label>
     <button type="submit" class="submit-button">Submit</button>
    </form>`;
  return htmlQuestion;
}

function generateStatus() {
  let htmlStatus = `
  <p>Question ${STORE.viewIndex + 1}/10 </p>
  <p>Your current score is ${STORE.score}/10</p>`;
  console.log("Generated Status");
  return htmlStatus;
  
}

function generateResults() {
  let endScore = "";
  
  if (STORE.score > 7 && STORE.score <=10) {
    endScore = "you could write a book yourself"
  }
  else if (STORE.score > 4 && STORE.score <=7) {
    endScore = "nice try, keep reading"
  }
  else if (STORE.score > 0 && STORE.score <=4) {
    endScore = "do you even have a library card?"
  }

  let htmlFinal =
  `
  <h2>Congratulations! Your score is ${STORE.score}/10</h2>
  <p>${endScore}</p>
  <button type="reset" class="reset">Play Again</button>
  `;
  
  return htmlFinal;
}


function renderResults() {
  let html = generateResults();
  $('.view').html(html);
}

function renderCorrect() {
  let html = `<h2>That is correct!</h2> 
      <img src="linktoimage" alt="happyface">
      <button type ="next" class="next">Next</button>`;
  $('.view').html(html);
}

function generateAnswerforIncorrect(correctAnswer) {
  return `<h2>That is incorrect! The author is ${correctAnswer}</h2>
      <img src="linktoimage" alt="sadface">
      <button type ="next" class="next">Next</button>`;
}

// user should be able to begin quiz - listen for click of 'begin' button
function beginQuiz(){
  $('.view').on('click', '.start-button', function(event){
    console.log("Button clicked");
    renderQuestion();
    STORE.viewStatus = "quiz";
    console.log(STORE);
    
    
   
  });   
}


// Event handlers (Get user input, update STORE, then call renderers) 
function handleAnswerSubmitted() {
  $('.view').submit('.submit-button', function(event){
    event.preventDefault();
    if ($('input[name="answer"]:checked').val() === QUESTIONS[STORE.viewIndex].correctAnswer){
      STORE.score++;
      renderCorrect();
      }
    else {
      renderIncorrectAnswer();
      }
    //renderStatus();
  }
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Answer answer?
    // Update STORE and render appropriate section
)};
  

function nextQuestion(){
  $('.view').on('click', '.next', function(event){
    if (STORE.viewIndex >= 9){
      renderResults()
    }
    else {
    console.log('nextQuestion ran');
    STORE.viewIndex++;
    renderQuestion();
    //renderStatus();
   }
  });
}


// use should be able to restart quiz
function restartQuiz(){
  $('.view').on('click', '.reset', function(event){
    console.log("restartQuiz ran");
    STORE.viewIndex = 0;
    STORE.viewStatus = "start";
    STORE.score = 0;
    renderStart();
  });
}


// this function runs all functions below to rerender DOM as needed
function handleAllFunctions(){
  renderStart();
  beginQuiz();
  handleAnswerSubmitted();
  nextQuestion();
  restartQuiz();
}

$(handleAllFunctions());