const $ = document.querySelector.bind(document); //=> JQuery
const $$ = document.querySelectorAll.bind(document); // NodeList

const tabs = $$(".tab-item");
const line = $(".line");
const panes = $$(".tab-pane");
const tabActive = $(".tab-item.active");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, idx) => {
  tab.onclick = function () {
    const pane = panes[idx]; //lay ra noi dung tuong ung voi tab

    $(".tab-item.active").classList.remove(".active");
    $(".tab-pane.active").classList.remove(".active");
    //xoa het class active
    line.style.left = tab.offsetLeft + "px";
    line.style.width = tab.offsetWidth + "px";

    this.classList.add(".active");
    panes.classList.add(".active");
  };
});
