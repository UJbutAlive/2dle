// baller stuff, if opened this for the answer, youre weak. If you opened this for studying it you're strong stand proud.
const quizData = [
  { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1199278267627229255/image.png?ex=65c1f5ec&is=65af80ec&hm=77c91dcc1108847db01191b2cd9d3ee88d665b8034bf512cb03d7b3e17628df2&', correctAnswer: 'Kurisu Makise' },
  
  { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1199278338372554772/image.png?ex=65c1f5fd&is=65af80fd&hm=1e9204256a87300a1517dbab3ab5fa4b6a70b2093f376a6a221499d13b839fda&', correctAnswer: 'Kurisu Makise' },

    { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1199278391703126037/image.png?ex=65c1f60a&is=65af810a&hm=522539067a2dfb552c38ddd317f098daaa87281b64af9c7381edad8cdd41ca1a&', correctAnswer: 'Kurisu Makise' },

   { image: 'https://cdn.discordapp.com/attachments/953151143641497660/1199278447877431357/image.png?ex=65c1f617&is=65af8117&hm=5b2155c3adccde9517d6a6c074858b3a5d62df7d7822cbd54cf75965968d1ada&', correctAnswer: 'Kurisu Makise' },
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
