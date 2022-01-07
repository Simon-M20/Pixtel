import { menuShow } from "./Modules/menu.js";
import scrollTopBtn from "./Modules/scrollTopBtn.js";
import { sendForm } from "./Modules/sendForm.js";
import swiper from "./Modules/swiper.js";
import { typed } from "./Modules/typed.js";
import contactFormValidation from "./Modules/validationForm.js";
import playVideo from "./Modules/videoPlay.js";

document.addEventListener("DOMContentLoaded", e => {
    swiper,
    playVideo(),
    menuShow(".menu-btn", ".header__menu", ".menu-link a"),
    scrollTopBtn(".scroll-top"),
    sendForm(),
    contactFormValidation(),
    typed
})