// Burger menu
const menuBurger = document.querySelector('.menu-burger');
const menuLeft = document.querySelector('.menu-left__list');

const openBurgerMenu = function () {
	menuBurger.classList.toggle('active');
	menuLeft.classList.toggle('active');
};

menuBurger.addEventListener('click', openBurgerMenu);

////////////////////////////////////

// Display today's date in input field
document.querySelector('.date-in').valueAsDate = new Date();

// Add 7 days to current date in input field
document.querySelector('.date-out').valueAsDate = new Date(
	Date.now() + 7 * 86400000
);
