function stubs
features
pseudocode functions

function render() {
    if (store.view === 'start') {
      $('.intro').show();
      $('.quiz').hide();
      $('.status').hide();
    } else if (store.view === 'quiz') {
      $('.intro').hide();
      $('.quiz').show();
      $('.status').show();
    }
  }

  // In-memory database of questions (static questions data)
const QUESTIONS = [];

// Create your initial store (track progress overtime)
const STORE = {
    // Current question
    // User's answer choice(s)
    // Current view
    // Score? Anything else?
};

// Template generators (generates HTML based on data)
function generateAnswerList(answers) {}

// Rendering functions (Reads STORE, calls generators, then adds HTML to DOM)
function renderQuestionText() {}

// Event handlers (Get user input, update STORE, then call renderers)
function handleAnswerSubmitted() {
  $('.user-controls').on('click', '.submit-answer', () => {
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}

//Initialize event listeners when DOM is ready
$(function(){
    handleAnswerSubmitted();
});