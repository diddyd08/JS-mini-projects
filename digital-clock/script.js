const dateDiv = document.querySelector(".digital-clock__date");
const timeDiv = document.querySelector(".digital-clock__time");

const makeTwoDigits = function (number) {
  return number < 10 ? `0${number}` : `${number}`;
};

const updateClock = function () {
  const now = new Date();
  dateDiv.textContent = `${now.getFullYear()}년 ${makeTwoDigits(now.getMonth() + 1)}월 ${makeTwoDigits(now.getDate())}일`;
  timeDiv.textContent = `${makeTwoDigits(now.getHours())}:${makeTwoDigits(now.getMinutes())}:${makeTwoDigits(now.getSeconds())}`;
};

updateClock();
setInterval(updateClock, 1000);
