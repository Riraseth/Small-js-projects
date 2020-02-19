const output = document.querySelector(".output");
const textArea = document.querySelector("#textArea");
const events = ["keyup", "keydown", "change"];
const maxLength = 30;
const warnLength = 10;
const counter = () => {
  let count = textArea.value.length;
  if (count > maxLength) {
    textArea.value = textArea.value.substring(0, length);
  }
  if (count > warnLength) {
    output.textContent = `${maxLength - count} characters left`;
    output.style.color = "red";
    output.style.display = "block";
  }
  if (count < warnLength) {
    output.style.display = "none";
  }
};

events.forEach(event => {
  textArea.addEventListener(event, counter);
});
