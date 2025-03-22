let students = JSON.parse(localStorage.getItem("students"));

if (!students) {
  students = [
    { name: "Nguyen Van Anh", age: 21, studentId: "SV001", email: "a@gmail.com" },
    { name: "Tran Thi Ba", age: 20, studentId: "SV002", email: "b@gmail.com" },
    { name: "Le Van Chin", age: 22, studentId: "SV003", email: "c@gmail.com" }
  ];
  localStorage.setItem("students", JSON.stringify(students));
}


function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}

function renderStudents(list = students) {
  const tbody = document.getElementById("studentList");
  tbody.innerHTML = "";

  list.forEach((s, index) => {
    let row = `<tr>
      <td>${index + 1}</td>
      <td>${s.name}</td>
      <td>${s.age}</td>
      <td>${s.studentId}</td>
      <td>${s.email}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

function addStudent() {
  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value);
  const studentId = document.getElementById("studentId").value.trim();
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("error");

  const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
  const idRegex = /^SV\d{3}$/;

  if (!name || isNaN(age) || !studentId || !email) {
    error.textContent = "⚠️ Vui lòng nhập đầy đủ thông tin.";
    return;
  }

  if (!emailRegex.test(email)) {
    error.textContent = "⚠️ Email không hợp lệ.";
    return;
  }

  if (!idRegex.test(studentId)) {
    error.textContent = " MSSV phải có định dạng SVxxx.";
    return;
  }

  students.push({ name, age, studentId, email });
  saveToLocalStorage();
  renderStudents();
  error.textContent = "";

  // Reset form
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("studentId").value = "";
  document.getElementById("email").value = "";
}

function searchStudents() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const result = students.filter(s => s.name.toLowerCase().includes(keyword));
  renderStudents(result);
}

// Load dữ liệu khi mở trang
renderStudents();
