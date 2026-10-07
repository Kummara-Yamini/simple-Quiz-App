const questions = [
    {
        question: "Which language is used to style a webpage?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "CSS"
    },
    {
        question: "Which language is used to structure a webpage?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: "HTML"
    },
    {
        question: "Which language makes a webpage interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "##", "<!--", "**"],
        answer: "//"
    },
    {
        question: "Which method is used to display text in the browser console?",
        options: ["console.log()", "print()", "display()", "show()"],
        answer: "console.log()"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestion];

    document.getElementById("question").textContent = question.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    question.options.forEach(function(option) {
        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("option");

        button.onclick = function() {
            if (option === question.answer) {
                score++;
            }

            document.querySelectorAll(".option").forEach(function(btn) {
                btn.disabled = true;
            });
        };

        optionsDiv.appendChild(button);
    });
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").textContent = "Quiz Completed!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("score").textContent =
            "Your Score: " + score + " / " + questions.length;
    }
}

loadQuestion();
