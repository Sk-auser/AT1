document.addEventListener("DOMContentLoaded", function() {
    let currentQuestionIndex = 0;
    const questions = JSON.parse(document.getElementById('content').getAttribute('data-questions'));
    const content = document.getElementById('content');
    const btn = document.getElementById('revealBtn');
    const noQuestionsMessage = document.getElementById('noQuestionsMessage'); // Select the element


    function displayQuestion() {
        // If there are questions, show reveal answer button
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex].fields.question_text;
            const answer = questions[currentQuestionIndex].fields.answer_text;
            content.innerHTML = `<div class='question'>Country:  ${question}</div><div class='answer' style='display: none;'>Capital City:  ${answer}</div>`;
            btn.textContent = "Reveal Answer";
            noQuestionsMessage.style.display = "none";
        // If there is no more questions, add message and GIF.
        } else {
            content.innerHTML = ""; // Clear content
            btn.style.display = "none";
            noQuestionsMessage.style.display = "block"; // Display no more questions message
            gwGif.style.display = "block"; // Display the GIF
        }
    
    }
    // Displays initial question
    displayQuestion();

    // If 'reveal answer' is clicked, the next button should be 'Next Question"
    btn.addEventListener("click", function() {
        const answerElement = content.querySelector('.answer');
        if (btn.textContent === "Reveal Answer") {
            answerElement.style.display = "block";
            btn.textContent = "Next Question";
        } else { // otherwise keep the same question
            currentQuestionIndex++; 
            displayQuestion();
        }
    });
});
