import { typed } from "./text.js";
import "./rain.js";
import "./form.js";

AOS.init();

const BurgerBtn = window.document.querySelector(".toggle");
const nav = window.document.querySelector(".nav-links");
const bars = window.document.querySelector(".fa-bars");
const barsX = window.document.querySelector(".fa-xmark");

const handleNav = () => {
	nav.classList.toggle("active");
	barsX.classList.toggle("hide");
	bars.classList.toggle("hide");
};

const removal = () => {
	nav.classList.remove("active");
	bars.classList.remove("hide");
	barsX.classList.toggle("hide");
};

BurgerBtn.addEventListener("click", handleNav);
nav.addEventListener("click", removal);

// let typed = new Typed(".napis", {
// 	strings: ["<strong>Front-end Developer</strong>", "Webmaster"],
// 	typeSpeed: 120,
// 	backSpeed: 60,
// 	smartBackspace: true, // this is a default
// 	loop: true,
// });
