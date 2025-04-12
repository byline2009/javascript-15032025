function Validator(options) {
  document.addEventListener("DOMContentLoaded", function () {
    const formElement = document.querySelector(options.form);
    formElement.onsubmit = function (e) {
      e.preventDefault();
    };
    const selectorRules = {};
    options.rules.forEach((rule) => {
      const element = document.querySelector(rule.selector);
      if (element) {
        // console.log("element", element);
        if (Array.isArray(selectorRules[rule.selector])) {
          selectorRules[rule.selector] = selectorRules[rule.selector].push(
            rule.test
          );
        } else {
          selectorRules[rule.selector] = [rule.test];
        }
      }
      var inputElements = formElement.querySelectorAll(rule.selector);
      Array.from(inputElements).forEach(function (inputElement) {
        // Xử lý trường hợp blur khỏi input
        inputElement.onblur = function () {
          console.log("onblur", inputElement.value);
        };
      });
    });

    // console.log("selectorRules", selectorRules);
  });
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
      if (regex.test(email)) {
        return undefined;
      } else {
        return message;
      }
    },
  };
};
