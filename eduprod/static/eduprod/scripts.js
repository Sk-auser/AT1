document.addEventListener("DOMContentLoaded", function() {
    let currentQuestionIndex = 0;
    const questions = JSON.parse(document.getElementById('content').getAttribute('data-questions'));
    const content = document.getElementById('content');
    const btn = document.getElementById('revealBtn');

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex].fields.question_text;
            const answer = questions[currentQuestionIndex].fields.answer_text;
            content.innerHTML = `<div class='question'>Country: ${question}</div><div class='answer' style='display: none;'>Capital City: ${answer}</div>`;
            btn.textContent = "Reveal Answer";
            noQuestionsMessage.style.display = "none";
        } else {
            content.innerHTML = ""; // Clear content
            btn.style.display = "none";
            noQuestionsMessage.style.display = "block"; // Display no more questions message
        }
    
    }

    displayQuestion();

    btn.addEventListener("click", function() {
        const answerElement = content.querySelector('.answer');
        if (btn.textContent === "Reveal Answer") {
            answerElement.style.display = "block";
            btn.textContent = "Next Question";
        } else {
            currentQuestionIndex++;
            displayQuestion();
        }
    });

}); // This is the missing closing curly brace
