const $ = document.querySelector.bind(document); //=> JQuery
const $$ = document.querySelectorAll.bind(document); // NodeList

const prev = $(".prev");
const next = $(".next");
const imgWrap = $(".img-wrap img");
const imageList = $$(".img-list div");

let nowIdx = 0;

setNowIndex(nowIdx);

function setNowIndex(index) {
  nowIdx = index;
  imgWrap.src = imageList[nowIdx].querySelector(".img-list div img").src;
  imageList.forEach((element) => {
    element.classList.remove("active");
  });
  imageList[nowIdx].classList.add("active");
}

imageList.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    setNowIndex(index);
  });
});

prev.addEventListener("click", (e) => {
  if (nowIdx == 0) nowIdx = imageList.length - 1;
  else nowIdx--;
  setNowIndex(nowIdx);
});

next.addEventListener("click", (e) => {
  if (nowIdx == imageList.lenght - 1) nowIdx == 0;
  else nowIdx++;
  setNowIndex(nowIdx);
});
