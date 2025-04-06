document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("form")
    .addEventListener("submit", async function (event) {
      event.preventDefault(); // Ngừng hành vi mặc định (submit form)
      console.log("Form submission prevented");
      const fullname = document.getElementById("fullname");
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      console.log("info", fullname.value, email.value, password.value);

      const result = await fetch(
        "https://ca5a80caf735f690b673.free.beeceptor.com/api/users?id=a63b0a6ff1143fcd54de",
        {
          method: "GET",
        }
      );

      const data = await result.json();
      console.log("data", data);

      fetch(
        "https://ca5a80caf735f690b673.free.beeceptor.com/api/users?id=a63b0a6ff1143fcd54de",
        {
          method: "GET",
        }
      )
        .then(async (result) => await result.json())
        .then((data) => {
          console.log("data", data);
        });

      fetch("https://ca5a80caf735f690b673.free.beeceptor.com/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: fullname.value,
          email: email.value,
          password: password.value,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

  // Mã của bạn ở đây
});
