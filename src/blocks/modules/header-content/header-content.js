let cityCheck = document.querySelector(".default-text"),
  email = document.getElementById("email");

const formSubmitBtn = document.querySelector(".submit-btn");
const checkbox = document.getElementById("checkbox");
const fakeCheckbox = document.querySelector(".checkbox");
const otherBtn = document.querySelector(".menu-actions").querySelector(".btn");

function validateForm(e) {
  e.preventDefault();

  const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validateEmail = email => {
    valueToCheck = String(email).toLowerCase();

    if (valueToCheck.match(regexp)) {
      return true;
    } else {
      return false;
    }
  };

  if (cityCheck.innerText != "Выбрать город" && checkbox.checked == true && validateEmail(email.value)) {
    cratePopup("Упс!", "Был бы back-end, всё бы сработало");
  } else {
    cratePopup("Ой", "Пожалуйста, корректно заполните поля");
  }
}

// Динамический попап
function cratePopup(incomingHeadingText, incomingText, ...args) {
  const popup = document.createElement("div"),
    popupWrapper = document.createElement("div"),
    popupHeading = document.createElement("h3"),
    popupText = document.createElement("p"),
    popupCloseBtn = document.createElement("button"),
    body = document.querySelector("body");

  body.classList.add("blocked");
  popup.classList.add("popup");
  popupWrapper.classList.add("popup-wrapper");
  popupCloseBtn.classList.add("popup-close-btn");

  function generateStyles() {
    // For fun
    if (args) {
      for (let i = 0; i < args.length; i++) {
        let str = args[i];
        let popupText = document.createElement("p");
        popupText.innerText = str;

        popupText.style.cssText = `
					font-size: 2.4rem;
					max-width: 240px;
					text-align: center;
					margin: 10px auto 0 auto;
				`;
        popupWrapper.append(popupText);
      }
    } else {
      popupText.style.cssText = `
				font-size: 2.8rem;
				max-width: 240px;
				text-align: center;
				margin: 0 auto;
			`;
    }

    popupCloseBtn.style.cssText = `
			width: 30px;
			height: 30px;
			align-self: end;
			margin: 20px;
			padding: 5px;
			background: url('../img/svg/popup-close.svg') no-repeat center / 100%;
			z-index: 10;
		`;

    popupText.style.cssText = `
			font-size: 2.4rem;
			max-width: 240px;
			text-align: center;
			margin: 0 auto;
		`;

    popupHeading.style.cssText = `
			font-size: 4rem;
			font-family: "Formular";
			margin: 15px 0 30px 0;
		`;

    popupWrapper.style.cssText = `
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			width: 320px;
			height: 460px;
			background-color: #ffffff;
			border-radius: 30px;
			box-shadow: 0px 0px 20px rgba(143, 149, 172, 0.4);
			animation: zoomIn 0.5s linear;
		`;

    popup.style.cssText = `
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: red;
			z-index: 1000;
		`;
  }

  popupHeading.innerText = incomingHeadingText;
  popupText.innerText = incomingText;
  popupWrapper.append(popupCloseBtn, popupHeading, popupText);

  popup.append(popupWrapper);
  document.documentElement.append(popup);
  generateStyles();

  popupCloseBtn.addEventListener("click", popupClose);

  function popupClose() {
    popupWrapper.style.cssText = `
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			width: 320px;
			height: 460px;
			background-color: #ffffff;
			border-radius: 30px;
			box-shadow: 0px 0px 20px rgba(143, 149, 172, 0.4);
			animation: zoomOut 0.5s linear;
		`;

    setTimeout(() => {
      popup.remove();
      body.classList.remove("blocked");
    }, 450);
  }
}

formSubmitBtn.addEventListener("click", validateForm, event);
otherBtn.addEventListener("click", function() {
  cratePopup(
    "©",
    "Наша работа — это безусловная любовь.",
    "Работа всех остальных в нашей жизни — нажимать на наши кнопки"
  );
});
