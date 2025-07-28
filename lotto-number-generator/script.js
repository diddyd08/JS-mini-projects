const LOTTO_SIZE = 6;
const LOTTO_MAX = 45;
const colors = ["orange", "skyblue", "red", "purple", "green"];

const numbersContainer = document.querySelector(".numbers");
const drawBtn = document.querySelector(".buttons__draw-btn");
const resetBtn = document.querySelector(".buttons__reset-btn");

const display = function (numbers, container) {
  numbers.forEach((number) => {
    const numberElement = document.createElement("span");
    numberElement.textContent = number;
    numberElement.style.backgroundColor = colors[Math.floor(number / 10)];
    container.appendChild(numberElement);
  });
};

const generateRandomNumbers = function (size, max) {
  const randomNumbers = [];
  while (randomNumbers.length < size) {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    if (randomNumbers.indexOf(randomNumber) === -1) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
};

drawBtn.addEventListener("click", () => {
  if (numbersContainer.children.length === 0) {
    const newRandomNumbers = generateRandomNumbers(LOTTO_SIZE, LOTTO_MAX);
    display(newRandomNumbers, numbersContainer);
  }
});

resetBtn.addEventListener("click", () => {
  numbersContainer.innerHTML = "";
});
