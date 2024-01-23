// baller stuff, if opened this for the answer, youre weak. If you opened this for studying it you're strong stand proud.
const quizData = [
  { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1198972722345164880/image.png?ex=65c0d95c&is=65ae645c&hm=c5f7fe237600c1ab77ba69b54955556ae7f2f629faa1e68e5f5cb86c8210cd5a&', correctAnswer: 'Minami Kotobuki' },
  
  { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1198973038411141210/image.png?ex=65c0d9a8&is=65ae64a8&hm=b90f4c48d4579cf59071a443cf7cfb789101942e62ecf32d44728bbdb5fe4e9e&', correctAnswer: 'Minami Kotobuki' },

    { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1198973246373122068/image.png?ex=65c0d9d9&is=65ae64d9&hm=89f548ecff16582a4f4bb2e1a3b609d9d74b1c1f34888ba778b4eb35d6d57ecc&', correctAnswer: 'Minami Kotobuki' },

   { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1198973849929261178/image.png?ex=65c0da69&is=65ae6569&hm=5a4377553e673319aa1d856d4116d4666f0a51e6ca8b97f1aaee0f69ed803486&', correctAnswer: 'Minami Kotobuki' },
];

let currentQuestion = 0;
let chancesLeft = 4;

// Function to initialize the quiz
function initializeQuiz() {
  showQuestion();
}

// display the current question
function showQuestion() {
  document.getElementById('quiz-image').src = quizData[currentQuestion].image;
}

// check the user's answer
function checkAnswer() {
  const userAnswer = document.getElementById('answer').value.toLowerCase();
  const correctAnswer = quizData[currentQuestion].correctAnswer.toLowerCase();

  if (userAnswer === correctAnswer) {
    document.getElementById('result').textContent = 'Correct! You guessed it!';
  } else {
    chancesLeft--;
    if (chancesLeft > 0) {
      document.getElementById('result').textContent = `Wrong answer! Chances left: ${chancesLeft}`;
      // Show the next hint image
      currentQuestion++;
      showQuestion();
    } else {
      // On the 4th attempt, show full image and correct answer
      document.getElementById('result').textContent = `Incorrect! The correct answer is ${correctAnswer}`;
      document.getElementById('quiz-image').src = quizData[currentQuestion].image;
      // Disable the answer input field
      document.getElementById('answer').disabled = true;
    }
  }
}

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

// Initialize the quiz when the page loads
window.onload = initializeQuiz;
