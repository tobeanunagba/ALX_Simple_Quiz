// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Retrieve the selected answer from the radio buttons
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element to display messages
    const feedbackElement = document.getElementById("feedback");
    
    // Check if an answer was selected
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

// Add an event listener to the "Submit Answer" button to trigger the checkAnswer function
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
