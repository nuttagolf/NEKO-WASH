let caseData = JSON.parse(localStorage.getItem('caseData')) || [];
let editingIndex = null;

function showForm() {
    hideAll();
    document.getElementById('caseFormSection').style.display = 'block';
}

function showSearch() {
    hideAll();
    document.getElementById('searchSection').style.display = 'block';
    searchCase();
}

function backToMenu() {
    hideAll();
    document.getElementById('mainMenu').style.display = 'flex';
    document.getElementById('caseForm').reset();
    editingIndex = null;
}

function hideAll() {
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('caseFormSection').style.display = 'none';
    document.getElementById('searchSection').style.display = 'none';
}

document.getElementById('caseForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const newCase = {
        caseNumber: document.getElementById('caseNumber').value,
        suspectName: document.getElementById('suspectName').value,
        blackCase: document.getElementById('blackCase').value,
        redCase: document.getElementById('redCase').value,
        court: document.getElementById('court').value,
        decisionDate: document.getElementById('decisionDate').value,
        judge: document.getElementById('judge').value,
        charge: document.getElementById('charge').value,
        verdict: document.getElementById('verdict').value
    };

    if (editingIndex !== null) {
        caseData[editingIndex] = newCase;
        alert('แก้ไขข้อมูลเรียบร้อย');
    } else {
        caseData.push(newCase);
        alert('บันทึกข้อมูลเรียบร้อย');
    }

    localStorage.setItem('caseData', JSON.stringify(caseData));
    this.reset();
    editingIndex = null;
    backToMenu();
});

function searchCase() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const tbody = document.getElementById('caseBody');
    tbody.innerHTML = '';
    caseData.forEach((c, index) => {
        if (Object.values(c).some(val => val.toLowerCase().includes(keyword))) {
            const row = `<tr>
                <td>${c.caseNumber}</td>
                <td>${c.suspectName}</td>
                <td>${c.blackCase}</td>
                <td>${c.redCase}</td>
                <td>${c.court}</td>
                <td>${c.decisionDate}</td>
                <td>${c.judge}</td>
                <td>${c.charge}</td>
                <td>${c.verdict}</td>
                <td><button class="edit-btn" onclick="editCase(${index})">แก้ไข</button></td>
                <td><button class="delete-btn" onclick="deleteCase(${index})">ลบ</button></td>
            </tr>`;
            tbody.innerHTML += row;
        }
    });
}

function editCase(index) {
    const id = prompt("กรุณากรอก ID:");
    const password = prompt("กรุณากรอก Password:");
    if (id === "62A614" && password === "12345678") {
        const c = caseData[index];
        document.getElementById('caseNumber').value = c.caseNumber;
        document.getElementById('suspectName').value = c.suspectName;
        document.getElementById('blackCase').value = c.blackCase;
        document.getElementById('redCase').value = c.redCase;
        document.getElementById('court').value = c.court;
        document.getElementById('decisionDate').value = c.decisionDate;
        document.getElementById('judge').value = c.judge;
        document.getElementById('charge').value = c.charge;
        document.getElementById('verdict').value = c.verdict;
        editingIndex = index;
        showForm();
    } else {
        alert("ID หรือ Password ไม่ถูกต้อง!");
    }
}

function deleteCase(index) {
    const id = prompt("กรุณากรอก ID:");
    const password = prompt("กรุณากรอก Password:");
    if (id === "62A614" && password === "12345678") {
        if (confirm('คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลคดีนี้?')) {
            caseData.splice(index, 1);
            localStorage.setItem('caseData', JSON.stringify(caseData));
            alert('ลบข้อมูลสำเร็จ');
            searchCase();
        } else {
            alert('ยกเลิกการลบข้อมูล');
        }
    } else {
        alert("ID หรือ Password ไม่ถูกต้อง!");
    }
}

function downloadExcel() {
    if (caseData.length === 0) {
        alert('ยังไม่มีข้อมูล');
        return;
    }
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "หมายเลขคดี,ชื่อผู้ต้องหา,เลขคดีดำ,เลขคดีแดง,ศาล,วันตัดสิน,ผู้พิพากษา,ข้อหา,คำพิพากษา
";
    caseData.forEach(c => {
        csvContent += `${c.caseNumber},${c.suspectName},${c.blackCase},${c.redCase},${c.court},${c.decisionDate},${c.judge},${c.charge},"${c.verdict.replace(/"/g, '""')}"
`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'case_data.csv');
    document.body.appendChild(link);
    link.click();
}
