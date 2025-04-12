let students = [];
document.addEventListener("DOMContentLoaded", function () {
  // Lấy danh sách
fetch('https://ca29ebf4933323a55a80.free.beeceptor.com/api/users/')
.then(res => res.json())
.then(data => {
  console.log('getdata from server', data)
  students = data;
  students
    .forEach((sv, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${sv.name}</td>
        <td>${sv.age}</td>
        <td>${sv.studentId}</td>
        <td>${sv.email}</td>
        <td><button onclick="deleteStudent(${index})">❌</button></td>
      `;
      studentList.appendChild(row);
    });

})
  const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const idInput = document.getElementById("studentId");
const emailInput = document.getElementById("email");
const error = document.getElementById("error");
const studentList = document.getElementById("studentList");
const searchInput = document.getElementById("search");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addStudent();
});

searchInput.addEventListener("input", () => renderStudents());

function addStudent() {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const studentId = idInput.value.trim();
  const email = emailInput.value.trim();

  const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
  const idRegex = /^SV\d{3}$/;

  if (!name || isNaN(age) || !studentId || !email) {
    return showError("⚠️ Vui lòng nhập đầy đủ thông tin.");
  }
  if (!idRegex.test(studentId)) {
    return showError("⚠️ MSSV phải theo định dạng SV001.");
  }
  if (!emailRegex.test(email)) {
    return showError("⚠️ Email không hợp lệ.");
  }

  const newStudent = { name, age, studentId, email };

  // 👉 Lưu vào localStorage
  students.push(newStudent);
  localStorage.setItem("students", JSON.stringify(students));

  // 👉 Gửi API
  postStudentToAPI(newStudent);

  clearForm();
  renderStudents();
  showSuccess("✅ Đã thêm sinh viên thành công!");
}

function showSuccess(message) {
  const success = document.getElementById("success");
  success.textContent = message;
  success.style.display = "block";
  setTimeout(() => {
    success.textContent = "";
    success.style.display = "none";
  }, 3000);
}

  

function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  renderStudents();
}

function renderStudents() {
  const searchValue = searchInput.value.trim().toLowerCase();
  studentList.innerHTML = "";

  students
    .filter(sv => sv.name.toLowerCase().includes(searchValue))
    .forEach((sv, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${sv.name}</td>
        <td>${sv.age}</td>
        <td>${sv.studentId}</td>
        <td>${sv.email}</td>
        <td><button onclick="deleteStudent(${index})">❌</button></td>
      `;
      studentList.appendChild(row);
    });
}

function clearForm() {
  nameInput.value = "";
  ageInput.value = "";
  idInput.value = "";
  emailInput.value = "";
  error.textContent = "";
}

function showError(message) {
  error.textContent = message;
  setTimeout(() => (error.textContent = ""), 3000);
}




// Gọi API để lưu sinh viên
function postStudentToAPI(student) {
  fetch('https://ca29ebf4933323a55a80.free.beeceptor.com/api/users/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student)
  })
  .then(res => res.json())
  .then(data => console.log("✅ Gửi API thành công:", data));
}



renderStudents();
})


