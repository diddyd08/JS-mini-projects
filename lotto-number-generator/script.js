const numberList = [];
const colors = ["orange", "skyblue", "red", "purple", "green"];

const drawBtn = document.querySelector(".buttons__draw-btn");
const resetBtn = document.querySelector(".buttons__reset-btn");

const display = function (numberList) {
  const numbers = document.querySelector(".numbers");
  numberList.forEach((number) => {
    const numberElement = document.createElement("span");
    numberElement.textContent = number;
    numberElement.style.backgroundColor = colors[Math.floor(number / 10)];
    numbers.appendChild(numberElement);
  });
};

drawBtn.addEventListener("click", () => {
  if (numberList.length === 0) {
    while (numberList.length < 6) {
      let randomNumber = Math.floor(Math.random() * 44 + 1);
      if (numberList.indexOf(randomNumber) === -1) {
        numberList.push(randomNumber);
      }
    }
    display(numberList);
  }
});

resetBtn.addEventListener("click", () => {
  numberList.splice(0, 6);
  const numbers = document.querySelector(".numbers");
  numbers.innerHTML = "";
});
