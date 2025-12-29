let correctEmail = "hawraa@gmail.com";
let correctPassword = "1234";
let attempts = 3;

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === correctEmail && password === correctPassword) {
        startQuiz();
    } else {
        attempts--;
        alert("Wrong login");

        if (attempts === 0) {
            alert("Wait 30 seconds");
            setTimeout(() => {
                attempts = 3;
            }, 30000);
        }
    }
}

function startQuiz() {
    let totalQuestions = Number(prompt("How many math questions do you want?"));
    let score = 0;
    let currentQuestion = 0;

    while (currentQuestion < totalQuestions) {

        let a = Math.floor(Math.random() * 10) + 1;
        let b = Math.floor(Math.random() * 10) + 1;

        let operators = ["+", "-", "*", "/"];
        let op = operators[Math.floor(Math.random() * operators.length)];

        let correctAnswer;
        if (op === "+") correctAnswer = a + b;
        if (op === "-") correctAnswer = a - b;
        if (op === "*") correctAnswer = a * b;
        if (op === "/") correctAnswer = a / b;

        let userAnswer = Number(
            prompt(`Question ${currentQuestion + 1}: ${a} ${op} ${b}`)
        );

        if (Math.abs(userAnswer - correctAnswer) < 0.01) {
            score++;
        }

        currentQuestion++;
    }

    alert(
        "Result:\n" +
        "Correct: " + score + "\n" +
        "Wrong: " + (totalQuestions - score)
    );
}
