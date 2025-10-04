function checkAnswer() {
  const correctAnswer = "4";
  const selected = document.querySelector('input[name="quiz"]:checked');
  const feedback = document.getElementById("feedback");

  if (!selected) {
    feedback.textContent = "Please select an answer first.";
    feedback.style.color = "orange";
    return;
  }

  const userAnswer = selected.value;

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "red";
  }
}

const button = document.getElementById("submit-answer");
button.addEventListener("click", checkAnswer);
