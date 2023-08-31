let currentIndex = 0;

function changeText(direction) {
    const textOptions = ["Cases", "Prepositions", "Context words", "Articles"];
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = textOptions.length - 1;
    } else if (currentIndex >= textOptions.length) {
        currentIndex = 0;
    }
    document.getElementById("text-carousel-text").textContent = textOptions[currentIndex];
}

function updateQuestion(newQuestion) {
    document.getElementById("question").innerHTML = newQuestion;
    document.getElementById("questions").style.visibility = "visible";
}

function showResponse() {
    const responseButton = document.getElementById("showbtn");
    const responseText = document.getElementById("response");

    responseButton.style.display = "none";
    responseText.style.display = "block";
}

function replaceSpaceWithInputs() {
    const pElement = document.getElementById('question');
    const underscoreRegex = /_{2,}/g;
    const replacedContent = pElement.textContent.replace(underscoreRegex, match => {
        const inputElement = document.createElement('input');
        inputElement.className = "question-space";
        inputElement.type = 'text';
        return inputElement.outerHTML;
    });
    pElement.innerHTML = replacedContent;
}

function generateRandomQuestion() {
    // Get list of questions involving cases
    const questions = CASES.split("\n");
    questions.pop()
    questions.shift()

    // Pick and display a random question
    randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const questionElement = document.getElementById('question');
    questionElement.innerHTML = randomQuestion;
    replaceSpaceWithInputs();
}

generateRandomQuestion();
