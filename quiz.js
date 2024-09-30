function checkAnswer() {
    // The correct answer for the quiz
    const correctAnswer = "4";

    // Retrieve the user's selected answer using querySelector to find the checked radio input
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element to display messages
    const feedbackElement = document.getElementById("feedback");

    // Check if the user has selected an answer
    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        feedbackElement.textContent = "Please select an answer!";
        feedbackElement.style.color = "orange";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
