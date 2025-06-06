// Get the modal and buttons
const modal = document.getElementById('quizModal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

// Open the modal
openModal.addEventListener('click', () => {
    modal.style.display = 'flex'; // Show the modal
});

// Close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
});

// Close the modal by clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle Quiz Answer
function answerQuiz(answer) {
    const question = document.getElementById('quizQuestion');
    if (answer === 'B') {
        question.innerHTML = "Bonne réponse ! L'Océan profond est généralement bleu foncé.";
    } else {
        question.innerHTML = "Mauvaise réponse. Essayez encore !";
    }
}

// Questions et réponses
const quizData = [
    { question: "Quelle est la couleur de l'Océan profond ?", correct: "B", answers: ["A. Bleu Clair", "B. Bleu Foncé", "C. Vert", "D. Transparent"] },
    { question: "Quel est le rôle principal de l'Océan dans le climat ?", correct: "A", answers: ["A. Réguler la température", "B. Provoquer des marées", "C. Créer des tempêtes", "D. Réfléchir la lumière"] },
    { question: "Quel pourcentage de la Terre est recouvert par l'Océan ?", correct: "C", answers: ["A. 50%", "B. 60%", "C. 71%", "D. 80%"] },
    { question: "Quelle zone de l’Océan contient le plus de biodiversité ?", correct: "A", answers: ["A. Les récifs coralliens", "B. Les abysses", "C. La haute mer", "D. Les eaux polaires"] },
    { question: "Quel gaz l'Océan absorbe-t-il pour aider à limiter le changement climatique ?", correct: "C", answers: ["A. Oxygène", "B. Azote", "C. Dioxyde de carbone", "D. Hélium"] },
    { question: "Qu’est-ce qui cause les marées ?", correct: "B", answers: ["A. Les vents", "B. La gravité de la Lune", "C. Les courants marins", "D. Les volcans sous-marins"] },
    { question: "Quel pourcentage de l’oxygène que nous respirons provient de l’Océan ?", correct: "C", answers: ["A. 30%", "B. 50%", "C. 70%", "D. 90%"] },
    { question: "Comment s’appelle la circulation océanique mondiale ?", correct: "A", answers: ["A. La pompe thermohaline", "B. La boucle polaire", "C. Le vortex marin", "D. La spirale abyssale"] },
    { question: "Quel organisme est responsable de la production de la majorité de l’oxygène de l’Océan ?", correct: "B", answers: ["A. Les coraux", "B. Le phytoplancton", "C. Les méduses", "D. Les algues"] },
    { question: "Comment les récifs coralliens protègent-ils les côtes ?", correct: "D", answers: ["A. En filtrant l’eau", "B. En absorbant le CO2", "C. En attirant les poissons", "D. En réduisant l'énergie des vagues"] }
];

let currentQuestionIndex = 0;

// Affiche une question
function loadQuestion() {
    const question = document.getElementById("quizQuestion");
    const options = document.querySelector(".quiz-options");
    const nextButton = document.getElementById("nextButton");

    // Charger la question courante
    const currentQuestion = quizData[currentQuestionIndex];
    question.innerHTML = currentQuestion.question;

    // Charger les options
    options.innerHTML = "";
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(String.fromCharCode(65 + index)); // A, B, C, D
        options.appendChild(button);
    });

    // Cacher le bouton suivant au début
    nextButton.style.display = "none";
    frustratingInput.input = "none";
}

// Vérifie la réponse
function checkAnswer(selectedAnswer) {
    const question = document.getElementById("quizQuestion");
    const nextButton = document.getElementById("nextButton");

    if (selectedAnswer === quizData[currentQuestionIndex].correct) {
        question.innerHTML = "Bonne réponse !";
        nextButton.style.display = "block"; // Montrer le bouton suivant
    } else {
        question.innerHTML = "Mauvaise réponse. Essayez encore !";
    }
}

// Passe à la question suivante
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        // Fin du quiz
        const question = document.getElementById("quizQuestion");
        const options = document.querySelector(".quiz-options");
        const nextButton = document.getElementById("nextButton");
        const frustratingContainer = document.getElementById("frustratingContainer");

        question.innerHTML = "Vous avez terminé le quiz, essayez ce champ frustrant !";
        options.innerHTML = ""; // Efface les options
        nextButton.style.display = "none"; // Cache le bouton suivant
        frustratingContainer.style.display = "block"; // Affiche la zone frustrante
        
    }
}

// Ajout du comportement frustrant à la zone de texte
const inputField = document.getElementById("frustratingInput");

inputField.addEventListener("input", () => {
    const currentText = inputField.value;
    const reversedText = currentText.split("").reverse().join("");
    inputField.value = reversedText;
});


// Initialisation
document.getElementById("openModal").addEventListener("click", () => {
    modal.style.display = "flex"; // Affiche la modal
    loadQuestion(); // Charge la première question
});
document.getElementById("nextButton").addEventListener("click", nextQuestion);
