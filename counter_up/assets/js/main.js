const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const face = $(".facebook h2");
const youtube = $(".youtube h2");
const tiktok = $(".tiktok h2");

function counterUp(item, end) {
  let speed = 200;
  let from = 0;
  let step = end / speed;

  const counter = setInterval(function () {
    from += step;
    if (from > end) {
      clearInterval(counter);
      item.innerText = end;
    } else item.innerText = Math.ceil(from);
  }, 1);
}

counterUp(face, 3300);
counterUp(youtube, 1000);
counterUp(tiktok, 900);
