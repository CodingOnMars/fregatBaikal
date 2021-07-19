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

////////////////////////////////////

// Reviews slider
$('.reviews__items').slick({
	prevArrow:
		'<button class="slider-btn slider-btn--left"><svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.08911 18.368C0.246216 17.5251 0.246216 16.1585 1.08911 15.3156L14.8249 1.57981C15.6678 0.736914 17.0344 0.736914 17.8773 1.57981C18.7202 2.42271 18.7202 3.78931 17.8773 4.63221L5.66771 16.8418L17.8773 29.0514C18.7202 29.8943 18.7202 31.2609 17.8773 32.1038C17.0344 32.9467 15.6678 32.9467 14.8249 32.1038L1.08911 18.368ZM4.77368 19.0002H2.61531L2.61531 14.6834H4.77368L4.77368 19.0002Z"/></svg></button>',
	nextArrow:
		'<button class="slider-btn slider-btn--right"><svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5261 18.368C18.369 17.5251 18.369 16.1585 17.5261 15.3156L3.79033 1.57981C2.94744 0.736914 1.58083 0.736914 0.737936 1.57981C-0.10496 2.42271 -0.10496 3.78931 0.737936 4.63221L12.9475 16.8418L0.737936 29.0514C-0.10496 29.8943 -0.10496 31.2609 0.737936 32.1038C1.58083 32.9467 2.94744 32.9467 3.79033 32.1038L17.5261 18.368ZM13.8416 19.0002H15.9999V14.6834H13.8416V19.0002Z"/></svg></button>',
	dots: true,
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 3,

	responsive: [
		{
			breakpoint: 1534,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 1366,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});
