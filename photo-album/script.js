const photoDiv = document.querySelector(".album-screen__photo");
const screenCover = document.querySelector(".screen-cover");
const coverRemoveBtn = document.querySelector(".screen-cover__remove-button");
const prevBtn = document.querySelector(".album-screen__button:first-child");
const nextBtn = document.querySelector(".album-screen__button:last-child");

const url = "https://dog.ceo/api/breeds/image/random";
const request = new XMLHttpRequest();
const photos = [];
let photosCount = 0;
let currentPhotoIndex = 0;
const maxAlbumLength = 10;

request.addEventListener("load", () => {
    console.log("image loaded successfully");
  const parsedJson = JSON.parse(request.responseText);
  const imageSrc = parsedJson.message;
  photos.push(imageSrc);
  photosCount += 1;
  photoDiv.style.backgroundImage = `url(${imageSrc})`;
  photoDiv.style.backgroundSize = "contain";
});

coverRemoveBtn.addEventListener("click", () => {
  screenCover.style.display = "none";
  request.open("GET", url);
  request.send();
});

prevBtn.addEventListener("click", () => {
  if (currentPhotoIndex > 0) {
    currentPhotoIndex -= 1;
    photoDiv.style.backgroundImage = `url(${photos[currentPhotoIndex]})`;
    photoDiv.style.backgroundSize = "contain";
  } else {
    alert("이전 사진이 없습니다.");
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPhotoIndex + 1 < photosCount) {
    currentPhotoIndex += 1;
    photoDiv.style.backgroundImage = `url(${photos[currentPhotoIndex]})`;
    photoDiv.style.backgroundSize = "contain";
  } else {
    if (photosCount + 1 > maxAlbumLength) {
        alert("최대 저장할 수 있는 사진의 개수를 초과했습니다.");
        return;
    }
    request.open("GET", url);
    request.send();
    currentPhotoIndex += 1;
  }
});
