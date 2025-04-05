document.addEventListener("DOMContentLoaded", function () {
  // Mã của bạn ở đây
  let elementFromGroup = document.querySelector(`.form-group`);
  if (elementFromGroup) {
    let childFormControl = elementFromGroup.querySelector(".form-control");
    let errorElement = elementFromGroup.querySelector(".form-message");
    if (childFormControl) {
      childFormControl.value = "Thai Vinh Le";
      console.log(
        "childFormControl.parentElement",
        childFormControl.parentElement
      );
      childFormControl.onblur = () => {
        console.log(
          "childFormControl.value.length ",
          childFormControl.value.length
        );
        if (childFormControl.value.length == 0) {
          if (errorElement) {
            errorElement.innerText = "Đây là trường bắt buộc nhập";
          }
        } else {
          errorElement.innerText = "";
        }
      };
    }
  }
  console.log("elementFromGroups", elementFromGroup);
});
