const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    expression += button.getAttribute("data-value");
    display.value = expression;
  });
});

clearBtn.addEventListener("click", () => {
  expression = "";
  display.value = "";
});

equalsBtn.addEventListener("click", () => {
  try {
    expression = eval(expression).toString();
    display.value = expression;
  } catch {
    display.value = "Error";
    expression = "";
  }
});
