const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const inputImg = $("#input-img");
inputImg.onchange = function (e) {
  let file = e.target.files[0];
  if (!file) return;
  let img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  $(".preview").appendChild(img);
};
