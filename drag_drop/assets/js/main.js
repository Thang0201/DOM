const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const boxes = $$(".box");
const draggable = $(".draggable");

draggable.addEventListener("dragstart", dragStart);
draggable.addEventListener("dragend", dragEnd);

boxes.forEach((box) => {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("drop", dragDrop);
});

function dragStart() {
  this.classList.add("dragging");
}

function dragEnd() {
  this.classList.remove("dragging");
}

function dragOver(e) {
  e.preventDefault();
  this.appendChild(draggable);
}

function dragDrop() {
  this.appendChild(draggable);
}
