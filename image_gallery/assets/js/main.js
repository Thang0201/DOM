const $ = document.querySelector.bind(document); //=> JQuery
const $$ = document.querySelectorAll.bind(document); // NodeList

const images = $$(".image-item > img");
const prev = $(".prev");
const next = $(".next");
const gallery = $(".gallery");
const galleryImage = $(".gallery-inner img");
const close = $(".gallery .close");
console.log(galleryImage);
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showGallery();
  });
});

function showGallery() {
  currentIndex == images.length - 1
    ? next.classList.add("hide")
    : next.classList.remove("hide");
  currentIndex == 0
    ? prev.classList.add("hide")
    : prev.classList.remove("hide");
  gallery.classList.add("show");
  galleryImage.src = images[currentIndex].src;
}

close.addEventListener("click", () => {
  gallery.classList.remove("show");
});

next.addEventListener("click", () => {
  currentIndex != images.length - 1 ? currentIndex++ : undefined;
  showGallery();
});
prev.addEventListener("click", () => {
  currentIndex != 0 ? currentIndex-- : undefined;
  showGallery();
});

document.addEventListener("keydown", (e) => {
  if (e.which == 27) {
    gallery.classList.remove("show");
  } else if (e.which == 39) {
    currentIndex != images.length - 1 ? currentIndex++ : undefined;
    showGallery();
  } else if (e.which == 37) {
    currentIndex != 0 ? currentIndex-- : undefined;
    showGallery();
  }
});
