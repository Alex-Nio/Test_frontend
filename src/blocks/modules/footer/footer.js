// footer js
const scrollBtn = document.querySelector(".scroll-top"),
	menu = document.querySelector(".nav");

function scrollTop() {
	const scrollToTop = () => {
		const x = document.documentElement.scrollTop || document.body.scrollTop;
		if (x > 0) {
			window.requestAnimationFrame(scrollToTop);
			window.scrollTo(0, x - x / 15);
			// Fast bugfix
			menu.style.cssText = `position: fixed; width: 100%; z-index: 100;`;
			menu.classList.remove("on-scroll");
		}
	};
	scrollToTop();
}

scrollBtn.addEventListener("click", scrollTop);
