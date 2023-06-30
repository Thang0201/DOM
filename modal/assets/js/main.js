const $ = document.querySelector.bind(document); //=> JQuery
const $$ = document.querySelectorAll.bind(document); // NodeList

const modal = $(".modal");
const btnOpen = $(".btn");
const iconClose = $(".modal-header i");
const btnClose = $(".modal-footer button");

function toggleModal() {
  modal.classList.toggle("hide");
}

btnOpen.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) toggleModal();
});