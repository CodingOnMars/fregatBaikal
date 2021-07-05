// Display today date in input date
// TO DO: find a proper solution for both input fields
const currentDate = document.querySelector('.form__input-date');
currentDate.valueAsNumber = Date.now() - new Date().getTimezoneOffset() * 60000;
