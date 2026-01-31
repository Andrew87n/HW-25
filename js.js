import { increase, decrease } from "./modules/counter";
import { updateValue } from "./modules/utils";

const valueEl = document.getElementById("value");
const incBtn = document.getElementById("increase");
const decBtn = document.getElementById("decrease");

incBtn.addEventListener("click", () => {
  const value = increase();
  updateValue(valueEl, value);
});

decBtn.addEventListener("click", () => {
  const value = decrease();
  updateValue(valueEl, value);
});
