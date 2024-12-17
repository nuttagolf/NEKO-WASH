let questions = [
    { question: "1 + 1 เท่ากับเท่าไหร่?", options: ["1", "2", "3", "4"], answer: "2" },
    { question: "3 + 2 เท่ากับเท่าไหร่?", options: ["4", "5", "6", "7"], answer: "5" },
    { question: "5 - 2 เท่ากับเท่าไหร่?", options: ["4", "3", "2", "1"], answer: "3" },
    { question: "10 ÷ 2 เท่ากับเท่าไหร่?", options: ["3", "4", "5", "6"], answer: "5" },
    { question: "2 x 3 เท่ากับเท่าไหร่?", options: ["5", "6", "7", "8"], answer: "6" },
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;

function startGame() {
    // ซ่อนหน้าเริ่มเกมและแสดงหน้าคำถาม
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    // รีเซ็ตค่าเริ่มต้น
    currentQuestion = 0;
    score = 0;
    timeLeft = 15;
    document.getElementById("score").innerText = "คะแนน: " + score;

    loadQuestion();
    startTimer();
}

function loadQuestion() {
    let questionObj = questions[currentQuestion];
    document.getElementById("question").innerText = questionObj.question;

    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // ล้างตัวเลือกเก่าออก

    questionObj.options.forEach(option => {
        let btn = document.createElement("button");
        btn.classList.add("option");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selected) {
    let correctAnswer = questions[currentQuestion].answer;

    if (selected === correctAnswer) {
        alert("ถูกต้องค้าบบ");
        score += 500; // เพิ่มคะแนน
        document.getElementById("score").innerText = "คะแนน: " + score;
        clearInterval(timer); // หยุดเวลา

        currentQuestion++;
        if (currentQuestion < questions.length) {
            timeLeft = 15; // รีเซ็ตเวลา
            loadQuestion();
            startTimer();
        } else {
            alert("เกมจบแล้ว! คะแนนรวมของคุณคือ " + score);
            resetGame();
        }
    } else {
        alert("ผิดจ้าาาาาา");
        score -= 250; // หักคะแนน
        document.getElementById("score").innerText = "คะแนน: " + score;
    }
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = "เวลา: " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("หมดเวลา! คำถามข้อต่อไป");
            currentQuestion++;
            if (currentQuestion < questions.length) {
                timeLeft = 15;
                loadQuestion();
                startTimer();
            } else {
                alert("เกมจบแล้ว! คะแนนรวมของคุณคือ " + score);
                resetGame();
            }
        }
    }, 1000);
}

function resetGame() {
    document.getElementById("start-container").style.display = "block";
    document.getElementById("quiz-container").style.display = "none";
}
