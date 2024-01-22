// Define quiz data
const quizData = [
  { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1198917795333812325/Screenshot_2024-01-22_144058.png?ex=65c0a635&is=65ae3135&hm=454cf3e8d50f69f3262102dafd4973a8f407290d05fd9c318205b78d16eadcbf&', correctAnswer: 'Ai Hoshino' },
  { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1198918270288404530/image.png?ex=65c0a6a6&is=65ae31a6&hm=accced0a9fda40d92f5aa3f8&', correctAnswer: 'Ai Hoshino' },

    { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1198918490439028807/image.png?ex=65c0a6da&is=65ae31da&hm=34801f28e5090e7d5c31568b4d33ec7c0df41902aab011e7c8e89c4912096891&', correctAnswer: 'Ai Hoshino' },

   { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1198919266506911815/image.png?ex=65c0a793&is=65ae3293&hm=3f32b591e38c44e43f56adb69ac5780e1415572d57eadae5d2b38b4f63edcdc1&', correctAnswer: 'Ai Hoshino' },
  // Add more quiz data as needed
];

const localStorageKey = 'quizAttemptTimestamp';

let currentQuestion = 0;
let chancesLeft = 4;

// Function to initialize the quiz
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

// Function to check the user's answer
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
      // Show the next hint image
      currentQuestion++;
      showQuestion();
    } else {
      // On the 4th attempt, show full image and correct answer
      document.getElementById('result').textContent = `Incorrect! The correct answer is ${correctAnswer}`;
      document.getElementById('quiz-image').src = quizData[currentQuestion].image;
      // Disable the answer input field
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

// Function to disable the quiz (used when the user has attempted today)
function disableQuiz() {
  document.getElementById('answer').disabled = true;
  document.querySelector('button').disabled = true;
}

// Initialize the quiz when the page loads
window.onload = initializeQuiz;