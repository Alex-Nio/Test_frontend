// -----------------------------------------------
// ---------------HEADER SLIDER-------------------
// -----------------------------------------------
import Swiper from "./../../../js/libs/swiper-bundle.min";

const swiper = new Swiper(".swiper", {
	direction: "horizontal",
	loop: false,
	autoplay: {
		enabled: true,
		delay: 3000
	},
	slidesPerView: 3,
	spaceBetween: 30,
	grabCursor: true,
	speed: 800,
	pagination: {
		el: ".swiper-pagination"
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 5
		},
		1080: {
			slidesPerView: 2
		},
		1590: {
			slidesPerView: 3,
			spaceBetween: 10
		},
		1281: {
			spaceBetween: 30
		}
	}
});

function ratingInitialize() {
	const ratingContainer = document.querySelectorAll(".rating");

	ratingContainer.forEach((item, i) => {
		const starSelector = ".rating-star";
		let thisRate = +item.getAttribute("data-rate");

		// Устанавливаем рейтинг по дата-атрибуту
		function setRating(item, rateSelector, currentRate, command) {
			let arr = item.querySelectorAll(rateSelector);

			// Если предзагрузка
			if (command === "preload") {
				for (let i = 0; i < arr.length; i++) {
					let el = arr[i];

					i >= currentRate ? el.classList.add("rating-star--empty") : el.classList.add("rating-star--filled");
				}
			}

			// Если пользователь сделал клик
			if (command === "set") {
				arr.forEach(el => {
					removeAllRates(el);
				});

				for (let i = 0; i < currentRate + 1; i++) {
					const el = arr[i];
					setActive(el);
				}

				if (currentRate == 4) {
					// Попап
				}
			}
		}

		// Устанавливаем дефолтный рейтинг из Html
		setRating(item, starSelector, thisRate, "preload");

		// Меняем рейтинг
		function changeRating(clickedItem, thisArrItem, rateSelector) {
			let currentRateBar = thisArrItem.querySelectorAll(rateSelector);

			// Находим текущий индекс элемента
			function getPosition(elementToFind, arrayElements) {
				let i;
				for (i = 0; i < arrayElements.length; i++) {
					if (arrayElements[i] === elementToFind) {
						return i;
					}
				}
				return null; //not found
			}

			return getPosition(clickedItem, currentRateBar);
		}

		// Убираем классы
		function removeAllRates(el) {
			el.classList.remove("rating-star--filled");
			el.classList.remove("rating-star--empty");
			el.classList.add("rating-star--empty");
		}

		// Добавляем классы
		function setActive(el) {
			el.classList.remove("rating-star--empty");
			el.classList.add("rating-star--filled");
		}

		// Клик по звезде
		item.addEventListener("click", function(e) {
			let target = e.target,
				clickedRate;

			if (!target.classList.contains("rating")) {
				clickedRate = changeRating(target, item, starSelector);

				+item.setAttribute("data-rate", clickedRate + 1);
				setRating(item, starSelector, clickedRate, "set");
			}
		});
	});
}

document.addEventListener("DOMContentLoaded", ratingInitialize);

let showMoreBtn = document.querySelector(".show-more-link");

showMoreBtn.addEventListener("click", e => {
	e.preventDefault();
});
