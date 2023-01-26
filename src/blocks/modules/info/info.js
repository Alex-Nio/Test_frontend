// const range = document.querySelector(".range"),
// 	thumb = document.querySelector(".range-thumb"),
// 	rangeBtn = document.getElementById("bar-btn");

// let max = range.max,
// 	rangePx = range.offsetWidth,
// 	thumbWidth = 95,
// 	mozThumb = 45,
// 	inputСoordinates,
// 	counterBtn = document.querySelector(".progressbar-btn");

// let onePercent = rangePx / thumbWidth;

// window.onbeforeunload = function() {
// 	range.value = 0;
// };

// // rangeBtn.addEventListener("click", function() {
// // 	range.value = Number(range.value) + 1;
// // 	range.setAttribute("value", range.value);
// // 	console.log(range.value);
// // });

// // Получаем значение с кнопки

// thumb.textContent = `0%`;

// // 1. Получить значение с кнопки оно будет в %
// // 2. Посчитать количество пикселей в 1%
// // 3. запустить счётчик
// // 4. Если счётчик = 1% нужно к left прибавить количество пикселей в 1%

const rangeInput = document.querySelector(".range");
const rangeThumb = document.querySelector(".range-thumb");
const rangeBtn = document.getElementById("bar-btn");
let percent, pixels;

function calc() {
	percent = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min);
	pixels = percent * rangeInput.offsetWidth;

	if (rangeInput.value >= 80) {
		rangeInput.value = 80;
	} else {
		rangeThumb.style.left = `${pixels + 5}px`;
	}
}

rangeInput.addEventListener("input", calc);

function updateRangeSlider(value) {
	let counter = 0;

	let counterIntervalId = setInterval(function() {
		counter++;

		if (counter === value) {
			clearInterval(counterIntervalId);
		}

		requestAnimationFrame(function() {
			calc();
			rangeInput.value = counter;
			rangeThumb.textContent = `${counter} %`;
		});
	}, 15);
}

rangeBtn.addEventListener("click", function(e) {
	let increment = parseInt(rangeBtn.value.toString());
	updateRangeSlider(increment);
});

rangeThumb.textContent = "0 %";
