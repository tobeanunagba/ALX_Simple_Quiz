// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Retrieve the selected answer from the radio buttons
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element to display messages
    const feedbackElement = document.getElementById("feedback");

    // Check if an answer was selected
    if (userAnswerElement) {
        const userAnswer = userAnswerElement.value;
        
        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; // Correct answer feedback
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; // Incorrect answer feedback
        }
    } else {
        // If no answer is selected, prompt the user to select one
        feedbackElement.textContent = "Please select an answer!";
        feedbackElement.style.color = "orange"; // No answer selected feedback
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
