// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    const feedbackElement = document.getElementById("feedback");
    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; // Set feedback color to green for correct answer
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; // Set feedback color to red for incorrect answer
        }
    } else {
        // If no answer was selected, prompt the user to select one
        feedbackElement.textContent = "Please select an answer!";
        feedbackElement.style.color = "orange"; // Set feedback color to orange for no selection
    }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
