const dataResult = [
  {
    fullname: "Duong",
    email: "duong@gmail.com",
  },
  {
    fullname: "Duy Khang",
    email: "khang@gmail.com",
  },
  {
    fullname: "Kiet",
    email: "Kiet@gmail.com",
  },
];

function Validator(options) {
  const selectorRules = {};
  document.addEventListener("DOMContentLoaded", async function () {
    const tableBody = document.querySelector("#myTable tbody");
    console.log("tableBody", tableBody);

    const result = await fetch(
      "https://ca5a80caf735f690b673.free.beeceptor.com/api/users"
    );
    const dataResult = await result.json();
    dataResult.forEach((item, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
          <td>${index + 1}</td>
          <td>${item.fullname}</td>
          <td>${item.email}</td>
        `;

      tableBody.appendChild(row);
    });
    const formElement = document.querySelector(options.form);
    formElement.onsubmit = async function (e) {
      e.preventDefault();
      let isValid = undefined;
      let data = {};
      const inputElements = formElement.querySelectorAll("[name]");
      // console.log("inputElements", inputElements);

      inputElements.forEach((element) => {
        // console.log("element.name", element.name, element);
        isValid = validate(`#${element.name}`, element);
        data[`${element.name}`] = element.value;
        if (isValid) {
          return;
        }
      });
      if (!isValid) {
        console.log("data from form", data);
        const result = await fetch(
          "https://ca5a80caf735f690b673.free.beeceptor.com/api/users",

          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        console.log("result", result);
      }
    };
    options.rules.forEach((rule) => {
      const element = document.querySelector(rule.selector);
      if (element) {
        // console.log("element", element);
        if (Array.isArray(selectorRules[rule.selector])) {
          selectorRules[rule.selector].push(rule.test);
        } else {
          selectorRules[rule.selector] = [rule.test];
        }
      }
      var inputElements = formElement.querySelectorAll(rule.selector);
      Array.from(inputElements).forEach(function (inputElement) {
        // Xử lý trường hợp blur khỏi input
        inputElement.onblur = function () {
          // console.log("onblur", rule.selector);
          validate(rule.selector, inputElement);
        };
      });
    });
    // console.log("selectorRules", selectorRules);
  });
  function validate(selector, inputElement) {
    let errorMessage = undefined;
    const parentElement = inputElement.parentElement;
    // console.log("parentElement", parentElement);
    const messageElement = parentElement.querySelector(".form-message");
    // console.log("messageElement", messageElement);
    const rules = selectorRules[selector];
    rules.forEach((rule, index) => {
      errorMessage = rule(inputElement.value);
      // console.log("errorMessage", errorMessage);
      if (errorMessage) {
        messageElement.innerText = errorMessage;
      } else {
        messageElement.innerText = "";
      }
    });

    return errorMessage;
  }
}
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: (value) => {
      if (value && value.length > 0) {
        return undefined;
      } else {
        return message;
      }
    },
  };
};
Validator.minLength = function (selector, message) {
  return {
    selector: selector,
    test: (value) => {
      if (value && value.length > 8) {
        return undefined;
      } else {
        return message;
      }
    },
  };
};
Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: (value) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (regex.test(value)) {
        return undefined;
      } else {
        return message;
      }
    },
  };
};

Validator.isConfirmPassword = function (selector, message) {
  return {
    selector: selector,
    test: (value) => {
      const passwordElement = document.querySelector("#password");
      if (passwordElement.value == value) {
        return undefined;
      } else {
        return message;
      }
    },
  };
};
