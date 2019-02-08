function stubs
features
pseudocode functions

  // In-memory database of questions (static questions data)
const QUESTIONS = [
  {
    number: 1,
    question: `Who wrote The Three Musketeers?`,
    firstAnswer: "Victor Hugo",
    secondAnswer: "Alexandre Dumas",
    thirdAnswer: "Albert Camus",
    fourthAnswer: "Marcel Proust"
    correctAnswer: secondAnswer, // Not sure if this is a good way to set this property.
  },
  {
    number: 2,
    // etc.
  }
];

// Create your initial store (track progress overtime)
const STORE = {
    viewIndex: 0, /* Title  will be 0, and viewIndex will increment
     when the user pushes "Next" button to move to the next question (include that in the appropriate eventHandler function)
     The question number(AKA QUESTIONS.number) will match the viewIndex. End page will be 11.*/
    selectedAnswer: "",
    viewStatus: "start",
    score: 0,
};

// Template generators (generates HTML based on data) FELIX
function generateAnswerList(answers) {}

// Rendering functions (Reads STORE, calls generators, then adds HTML to DOM) FELIX

function renderQuestionText() {
  generateAnswerList(STORE.number)
}

// Need to integrate this function into the rest of the code. Maybe into renderQuestionText?
function render() {
  if (store.viewStatus === 'start') {
    $('.intro').show();
    $('.quiz').hide();
    $('.status').hide();
  } else if (store.viewStatus === 'quiz') {
    $('.intro').hide();
    $('.quiz').show();
    $('.status').show();
  }
}


// Event handlers (Get user input, update STORE, then call renderers) ANYA
function handleAnswerSubmitted() {
  $('.user-controls').on('click', '.submit-answer', () => {
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}

//Initialize event listeners when DOM is ready ANYA
$(function(){
    handleAnswerSubmitted();
});

// Main function that calls the renderer and the event handler(s).
// The order these functions are called in may need to change based on the program logic.
function main() {
  renderQuestionText();
  handleAnswerSubmitted();
}

// When the page loads, call main
$(main);