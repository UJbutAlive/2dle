// baller stuff
const quizData = [
  { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1198972722345164880/image.png?ex=65c0d95c&is=65ae645c&hm=c5f7fe237600c1ab77ba69b54955556ae7f2f629faa1e68e5f5cb86c8210cd5a&', correctAnswer: 'Minami Kotobuki' },
  
  { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1198973038411141210/image.png?ex=65c0d9a8&is=65ae64a8&hm=b90f4c48d4579cf59071a443cf7cfb789101942e62ecf32d44728bbdb5fe4e9e&', correctAnswer: 'Minami Kotobuki' },

    { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1198973246373122068/image.png?ex=65c0d9d9&is=65ae64d9&hm=89f548ecff16582a4f4bb2e1a3b609d9d74b1c1f34888ba778b4eb35d6d57ecc&', correctAnswer: 'Minami Kotobuki' },

   { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1198973849929261178/image.png?ex=65c0da69&is=65ae6569&hm=5a4377553e673319aa1d856d4116d4666f0a51e6ca8b97f1aaee0f69ed803486&', correctAnswer: 'Minami Kotobuki' },
];

const localStorageKey = 'quizAttemptTimestamp';

let currentQuestion = 0;
let chancesLeft = 4; // nah id win

// Function to initialize
function initializeQuiz() {
  const lastAttemptTimestamp = localStorage.getItem(localStorageKey);

  if (lastAttemptTimestamp) {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - parseInt(lastAttemptTimestamp);

    if (timeDifference < 24 * 60 * 60 * 1000) {
      // Notify the user and prevent starting a new quiz
      document.getElementById('result').textContent = 'You\'ve already attempted today\'s quiz. Come back after 24 hours for a new one!';
      disableQuiz();
      return;
    }
  }

  showQuestion();
}

// Function to display the current question
function showQuestion() {
  document.getElementById('quiz-image').src = quizData[currentQuestion].image;
  document.getElementById('answer').disabled = false; // Enable the answer input field
}

// check the user's answer
function checkAnswer() {
  const userAnswer = document.getElementById('answer').value.toLowerCase();
  const correctAnswer = quizData[currentQuestion].correctAnswer.toLowerCase();

  if (userAnswer === correctAnswer) {
    document.getElementById('result').textContent = 'Correct! You guessed it!';
    document.getElementById('answer').disabled = true; // Disable the answer input field
  } else {
    chancesLeft--;
    if (chancesLeft > 0) {
      document.getElementById('result').textContent = `Wrong answer! Chances left: ${chancesLeft}`;
      // Show next hint image
      currentQuestion++;
      showQuestion();
    } else {
      // correct answer
      document.getElementById('result').textContent = `Incorrect! The correct answer is ${correctAnswer}`;
      document.getElementById('quiz-image').src = quizData[currentQuestion].image;
      // Disable the answer input
      document.getElementById('answer').disabled = true;
      // Save the timestamp of the quiz attempt in local storage
      localStorage.setItem(localStorageKey, new Date().getTime().toString());
    }
  }
}

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

// Function to disable the quiz
function disableQuiz() {
  document.getElementById('answer').disabled = true;
  document.querySelector('button').disabled = true;
}

// Initialize the quiz
window.onload = initializeQuiz;
