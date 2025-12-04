const params = new URLSearchParams(window.location.search);
const lessonId = parseInt(params.get("id"));
const lesson = lessons.find(l => l.id === lessonId);

const container = document.getElementById("lesson-images");
container.innerHTML = ""; 
lesson.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("lesson-img");
    container.appendChild(img);
});

function fillTable(id, lessonData) {
    const table = document.getElementById(id);
    if (!table || !lessonData || !lessonData.readings) return;

    table.innerHTML = `
        <tr><th>Number</th><th>Reading</th></tr>
    `;

lessonData.readings.forEach(r => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${r.number}</td><td>${r.highlight ? '<b>' + r.reading + '</b>' : r.reading}</td>`;
    table.appendChild(row);
});

}

if (lesson) {
    document.getElementById("title").textContent = lesson.title;
    document.getElementById("explanation").textContent = lesson.explanation;
    document.body.style.backgroundColor = lesson.color;

    fillTable("hint-readings-exp", lesson);
    fillTable("hint-readings-quiz", lesson);

} else {
    document.getElementById("title").textContent = "Lesson not found";
}

const hintBtnExp = document.getElementById("HintBtnExp");
const hintPopupExp = document.getElementById("hint-popup-exp");

hintBtnExp.addEventListener("mouseenter", () => hintPopupExp.style.display = "block");
hintBtnExp.addEventListener("mouseleave", () => hintPopupExp.style.display = "none");

const hintBtnQuiz = document.getElementById("HintBtnQuiz");
const hintPopupQuiz = document.getElementById("hint-popup-quiz");

hintBtnQuiz.addEventListener("mouseenter", () => hintPopupQuiz.style.display = "block");
hintBtnQuiz.addEventListener("mouseleave", () => hintPopupQuiz.style.display = "none");

function showScreen(name) {
    document.getElementById("screen-explanation").style.display = (name === "explanation") ? "block" : "none";
    document.getElementById("screen-quiz").style.display = (name === "quiz") ? "block" : "none";
}

let currentQuestionIndex = 0;
let answeredCorrectly = false; 

document.getElementById("RenshuuBtn").addEventListener("click", () => {
    currentQuestionIndex = 0;
    answeredCorrectly = false;
    showScreen("quiz");
    showQuestion();
});

function showQuestion() {
    const q = lesson.questions[currentQuestionIndex];
    document.getElementById("quiz-question").textContent = q.prompt;
    document.getElementById("quiz-input").value = "";
    document.getElementById("quiz-feedback").textContent = "";
    answeredCorrectly = false; 

function checkAnswer() {
    const inp = document.getElementById("quiz-input").value.trim();
    const correct = lesson.questions[currentQuestionIndex].answer;
    return inp === correct;
}

function nextQuestion() {
    currentQuestionIndex++;
    const fb = document.getElementById("quiz-feedback");

    if (currentQuestionIndex >= lesson.questions.length) {
        document.getElementById("quiz-question").textContent = "お疲れ様！全部できた！";
        document.getElementById("quiz-input").style.display = "none";
        document.getElementById("NextBtn").style.display = "none";
        fb.textContent = ""; 
        return;
    }
    showQuestion();
}


document.getElementById("NextBtn").addEventListener("click", () => {
    const fb = document.getElementById("quiz-feedback");

    if (!answeredCorrectly) {
        if (checkAnswer()) {
            fb.textContent = "Correct!";
            answeredCorrectly = true;
        } else {
            fb.textContent = "Try again!";
        }
    } else {
        nextQuestion();
    }
});

document.getElementById("quiz-input").addEventListener("keydown", (e) => {
    const fb = document.getElementById("quiz-feedback");

    if (e.key === "Enter") {
        e.preventDefault();
        if (!answeredCorrectly) {
            if (checkAnswer()) {
                fb.textContent = "Correct!";
                answeredCorrectly = true;
            } else {
                fb.textContent = "Try again!";
            }
        } else {
            nextQuestion();
        }
    }

    if (e.key === "ArrowRight" && answeredCorrectly) {
        nextQuestion();
    }
});
