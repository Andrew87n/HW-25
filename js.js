const valueEl = document.getElementById("value");
const incBtn = document.getElementById("increase");
const decBtn = document.getElementById("decrease");

import { increase, decrease } from "./modules/counter";
import { updateValue } from "./modules/utils";

incBtn.addEventListener("click", () => {
  const value = increase();
  updateValue(valueEl, value);
});

decBtn.addEventListener("click", () => {
  const value = decrease();
  updateValue(valueEl, value);
});
console.log("JS працює");