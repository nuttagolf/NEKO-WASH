let questions = [
    { question: "ใครเป็นพระมหากษัตริย์พระองค์แรกของราชวงศ์จักรี?", options: ["พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลก", "พระบาทสมเด็จพระเจ้าอยู่หัวภูมิพลอดุลยเดช", "พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว", "พระบาทสมเด็จพระอานันทมหิดล"], answer: "พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลก" },
    { question: "พระบรมรูปทรงม้า อยู่ที่พระบรมมหาราชวังในกรุงเทพฯ ถูกสร้างขึ้นในสมัยใด?", options: ["รัชกาลที่ 4", "รัชกาลที่ 5", "รัชกาลที่ 6", "รัชกาลที่ 7"], answer: "รัชกาลที่ 5" },
    { question: "เหตุการณ์ 14 ตุลาคม 2516 เกิดขึ้นที่ไหน?", options: ["ที่มหาวิทยาลัยธรรมศาสตร์", "ที่ราชดำเนิน", "ที่โรงพยาบาลศิริราช", "ที่สนามหลวง"], answer: "ที่มหาวิทยาลัยธรรมศาสตร์" },
    { question: "รัชกาลที่ 9 ขึ้นครองราชย์ในปีพ.ศ. ใด?", options: ["พ.ศ. 2489", "พ.ศ. 2491", "พ.ศ. 2500", "พ.ศ. 2513"], answer: "พ.ศ. 2491" },
    { question: "เหตุการณ์สวรรคตของพระบาทสมเด็จพระเจ้าอยู่หัวอานันทมหิดล เกิดขึ้นในปี?", options: ["พ.ศ. 2470", "พ.ศ. 2499", "พ.ศ. 2513", "พ.ศ. 2523"], answer: "พ.ศ. 2470" },
    { question: "การปฏิวัติสยามครั้งแรกเกิดขึ้นในสมัยใด?", options: ["สมัยกรุงศรีอยุธยา", "สมัยกรุงธนบุรี", "สมัยกรุงรัตนโกสินทร์", "สมัยกรุงศรีเทพนคร"], answer: "สมัยกรุงรัตนโกสินทร์" },
    { question: "ใครเป็นผู้นำกองทัพไทยในสงครามไทย-พม่าครั้งที่ 2?", options: ["สมเด็จพระนเรศวรมหาราช", "สมเด็จพระเอกาทศรถ", "สมเด็จพระบรมราชาธิราชที่ 1", "พระราชมารดาแห่งพระนเรศวร"], answer: "สมเด็จพระนเรศวรมหาราช" },
    { question: "ประเทศไทยเคยถูกปกครองโดยประเทศใดในช่วงสงครามโลกครั้งที่ 2?", options: ["ญี่ปุ่น", "ฝรั่งเศส", "อังกฤษ", "สหรัฐอเมริกา"], answer: "ญี่ปุ่น" },
    { question: "การปฏิรูปการปกครองในประเทศไทยเริ่มต้นในปีใด?", options: ["พ.ศ. 2475", "พ.ศ. 2476", "พ.ศ. 2480", "พ.ศ. 2490"], answer: "พ.ศ. 2475" },
    { question: "ปรากฏการณ์ยุคทองของกรุงศรีอยุธยาคือสมัยใด?", options: ["สมัยพระเจ้าทรงธรรม", "สมัยพระเจ้าอู่ทอง", "สมัยพระนเรศวรมหาราช", "สมัยพระเจ้าเชษฐา"], answer: "สมัยพระนเรศวรมหาราช" },
    { question: "สมเด็จพระนางเจ้าสุนันทากุมารีรัตน์ เป็นพระราชธิดาของพระมหากษัตริย์พระองค์ใด?", options: ["รัชกาลที่ 3", "รัชกาลที่ 4", "รัชกาลที่ 5", "รัชกาลที่ 6"], answer: "รัชกาลที่ 4" },
    { question: "การต่อสู้ในเหตุการณ์สงครามกรุงศรีอยุธยาครั้งสุดท้ายเกิดขึ้นในปีใด?", options: ["พ.ศ. 2310", "พ.ศ. 2311", "พ.ศ. 2312", "พ.ศ. 2313"], answer: "พ.ศ. 2310" },
    { question: "เหตุการณ์หมื่นตาเท่าทวี เกิดขึ้นที่ไหน?", options: ["ที่เมืองกาญจนบุรี", "ที่เมืองสุรินทร์", "ที่กรุงเทพมหานคร", "ที่เมืองอุบลราชธานี"], answer: "ที่เมืองกาญจนบุรี" },
    { question: "ใครคือผู้ก่อตั้งกรุงธนบุรี?", options: ["สมเด็จพระเจ้าตากสินมหาราช", "สมเด็จพระบรมราชาธิราชที่ 1", "พระเจ้าทรงธรรม", "สมเด็จพระเจ้าพี่นาง"], answer: "สมเด็จพระเจ้าตากสินมหาราช" },
    { question: "ประมุขแห่งราชวงศ์จักรีในยุคแรกคือใคร?", options: ["พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลก", "สมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว", "พระบาทสมเด็จพระเจ้าอยู่หัวภูมิพลอดุลยเดช", "พระบาทสมเด็จพระอานันทมหิดล"], answer: "พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลก" },
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
        score -= 200; // หักคะแนน
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
