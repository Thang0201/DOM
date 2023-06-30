const $ = document.querySelector.bind(document); //=> JQuery
const $$ = document.querySelectorAll.bind(document); // NodeList

const box = $(".box");
const eKey = $(".card.key p:last-child");
const eLocation = $(".card.location p:last-child");
const eWhich = $(".card.which p:last-child");
const eCode = $(".card.code p:last-child");
const result = $(".result");

document.addEventListener("keydown", (e) => {
  let keyName = e.keyCode === 32 ? 'Space' : e.key;
  result.innerText = e.keyCode;
  eKey.innerText = keyName;
  eLocation.innerText = e.location;
  eWhich.innerText = e.which;
  eCode.innerText = e.code;
  $(".alert").classList.add("hide");
  box.classList.remove("hide");
});
