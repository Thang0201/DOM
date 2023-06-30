const $ = document.querySelector.bind(document); //=> JQuery
const $$ = document.querySelectorAll.bind(document); // NodeList

const backgroundColor = $('.container');
const rangeBar = $('.range-bar');
const textPercent = $('span');
const range = $('.range')

function handeChange(percent) {
  rangeBar.style.width = `${percent}%`
  backgroundColor.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`
  textPercent.innerText = `${percent}%`
}

handeChange(40)

range.addEventListener('mousemove', function (e) {
	const process = e.pageX - this.offsetLeft
	let percent = (process / this.offsetWidth) * 100

	percent = Math.ceil(percent)
	handeChange(percent)
})