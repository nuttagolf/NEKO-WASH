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
      const shortVerdict = c.verdict.length > 50 ? c.verdict.substring(0, 50) + "..." : c.verdict;
      const row = `<tr>
        <td>${c.caseNumber}</td>
        <td>${c.suspectName}</td>
        <td>${c.blackCase}</td>
        <td>${c.redCase}</td>
        <td>${c.court}</td>
        <td>${c.decisionDate}</td>
        <td>${c.judge}</td>
        <td>${c.charge}</td>
        <td>
          ${shortVerdict}
          ${c.verdict.length > 50 ? `<br><button class="view-btn" onclick="viewFullVerdict('${c.verdict.replace(/'/g, "\\'")}')">ดูรายละเอียด</button>` : ''}
        </td>
        <td><button class="edit-btn" onclick="editCase(${index})">แก้ไข</button></td>
        <td><button class="delete-btn" onclick="deleteCase(${index})">ลบ</button></td>
      </tr>`;
      tbody.innerHTML += row;
    }
  });
}

function viewFullVerdict(fullText) {
  alert("คำพิพากษาฉบับเต็ม:\n\n" + fullText);
}

function editCase(index) {
  const id = prompt("กรุณากรอก ID:");
  const password = prompt("กรุณากรอก Password:");
  if (id === "42A604" && password === "12345678") {
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
  if (id === "42A604" && password === "12345678") {
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

  let csvContent = "\uFEFF"; // เพิ่ม BOM
  csvContent += "หมายเลขคดี,ชื่อผู้ต้องหา,เลขคดีดำ,เลขคดีแดง,ศาล,วันตัดสิน,ผู้พิพากษา,ข้อหา,คำพิพากษา\n";

  caseData.forEach(c => {
    csvContent += `="${c.caseNumber}",${c.suspectName},${c.blackCase},${c.redCase},${c.court},${c.decisionDate},${c.judge},${c.charge},"${c.verdict.replace(/"/g, '""')}"\n`;
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'case_data.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
