// -----------------------------------------------
// -------------SVG FILL SCRIPT-------------------
// -----------------------------------------------

// $(function () {
// 	$('img.img-svg').each(function () {
// 		var $img = $(this);
// 		var imgClass = $img.attr('class');
// 		var imgURL = $img.attr('src');
// 		$.get(imgURL, function (data) {
// 			var $svg = $(data).find('svg');
// 			if (typeof imgClass !== 'undefined') {
// 				$svg = $svg.attr('class', imgClass + ' replaced-svg');
// 			}
// 			$svg = $svg.removeAttr('xmlns:a');
// 			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
// 				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
// 			}
// 			$img.replaceWith($svg);
// 		}, 'xml');
// 	});
// });

// -----------------------------------------------
// -----------HEADER NAV SCROLL-------------------
// -----------------------------------------------

// // Blocks
// let header = document.querySelector('.header'),
// 	content = document.querySelector('.header__content'),
// 	nav = header.querySelector('.header-nav'),
// 	burgerBtn = document.querySelector('.header-nav__trigger'),
// 	mobileMenu = document.querySelector('.mobile-menu'),
// 	mobileMenuLi = mobileMenu.querySelectorAll('.mobile-menu__item');
// // Triggers
// let scrollTriger = 'on-scroll',
// 	activeTrigger = 'active',
// 	menuOpenTrigger = 'open-menu',
// 	showTrigger = 'show',
// 	// Params
// 	navHeight = nav.offsetHeight;

// burgerBtn.addEventListener('click', () => {
// 	burgerBtn.classList.toggle(menuOpenTrigger);
// 	mobileMenu.classList.toggle(activeTrigger);

// 	// Если меню отображено, показываем пункты меню
// 	if (mobileMenu.classList.contains(activeTrigger)) {
// 		mobileMenuLi.forEach(li => {
// 			li.classList.add(showTrigger);
// 		});
// 	} else {
// 		mobileMenuLi.forEach(li => {
// 			li.classList.remove(showTrigger);
// 		});
// 	}
// });

// -----------------------------------------------
// ------------------REQ FRAMES-------------------
// -----------------------------------------------

// var requestFrame = window.requestAnimationFrame ||
// 	window.webkitRequestAnimationFrame ||
// 	// polyfill - throttle fall-back for unsupported browsers
// 	(function () {
// 		var throttle = false,
// 			FPS = 1000 / 60; // 60fps (in ms)

// 		return function (CB) {
// 			if (throttle) return;
// 			throttle = true;
// 			setTimeout(function () { throttle = false }, FPS);
// 			CB();
// 			console.log(CB);
// 		}
// 	})();

// // use case:
// function onScroll() {
// 	window.addEventListener("scroll", callbackFunc);
// 	function callbackFunc() {
// 		var y = window.pageYOffset;

// 		if (y > 0) {
// 			nav.classList.add(scrollTriger);
// 		} else {
// 			nav.classList.remove(scrollTriger);
// 		}
// 	}
// }

// window.onscroll = function () {
// 	requestFrame(onScroll);
// };

// -----------------------------------------------
// ---------------HEADER SLIDER-------------------
// -----------------------------------------------

// const swiper = new Swiper('.header-slider', {
// 	// Optional parameters
// 	direction: 'horizontal',
// 	grabCursor: true,
// 	slidesPerView: 1,
// 	speed: 1050,
// 	// loop: true,
// 	// autoplay: true,
// 	effect: "cube",
// 	cubeEffect: {
// 		shadow: false,
// 		slideShadows: false,
// 		shadowOffset: 20,
// 		shadowScale: 0.8,
// 	},
// 	// If we need pagination
// 	pagination: {
// 		el: '.custom-pagination',
// 	},

// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.action-elipse-next',
// 		prevEl: '.action-elipse-prev',
// 	}
// });

// -----------------------------------------------
// -----------CIRCLE MAGIC ROTATION---------------
// -----------------------------------------------

// let circleBtns = document.querySelectorAll('.circle-btn'),
// 	circleParent = document.querySelector('.circle-parent'),
// 	descrps = document.querySelectorAll('.descr-block');

// circleBtns.forEach((btn, i) => {
// 	btn.addEventListener('click', function (e) {
// 		hideTabContent();
// 		setActiveDescr(i);
// 	});
// });

// function setActiveBtn(i) {
// 	circleBtns[i].classList.add('active');
// }

// function setActiveDescr(i) {
// 	descrps[i].classList.add('active');
// 	descrps[i].style.cssText = `animation: fadeIn 0.3s linear`;

// }

// function hideTabContent() {
// 	descrps.forEach(descr => {
// 		descr.classList.remove('active');
// 	});

// 	circleBtns.forEach(btn => {
// 		btn.classList.remove('active');
// 	});
// }

// circleParent.addEventListener('click', function (e) {
// 	activeClassReset();

// 	let target = e.target;

// 	targetSetActiveClass(target);
// 	setActiveIcon(target);

// });

// // Анимация родительского круга
// function setCircleAnimation() {
// 	circleParent.style.cssText = `
//     transform: rotate(360deg);
//     transition-duration: 1s;
//   `;

// 	setTimeout(clearStyle, 900);
// }

// // Сброс активной кнопки
// function activeClassReset() {
// 	circleBtns.forEach(btn => {
// 		btn.classList.remove('active');
// 	});
// }

// // Вешаем активный класс на кнопку
// function targetSetActiveClass(target) {
// 	if (target.classList.contains('circle-btn')) {
// 		target.classList.add('active');
// 	} else if (target.parentNode.className == 'circle-btn') {
// 		target.parentNode.classList.add('active');
// 	}
// }

// // Выводим новую центральную иконку
// function setActiveIcon(target) {
// 	let activeBtn = document.querySelector('.circle-btn.active'),
// 		activeBtnIcon = activeBtn.querySelector('i').classList.value,
// 		parentCenteredIcon = circleParent.querySelector("[data-element]");

// 	parentCenteredIcon.classList.value = activeBtnIcon;
// }

// // Очищаем атрибут стилей
// function clearStyle() {
// 	circleParent.removeAttribute("style");
// }
