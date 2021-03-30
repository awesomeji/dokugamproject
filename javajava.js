const togglebutton = document.querySelector('.header_togglebutton');
const menu = document.querySelector('.header_menu');
const link = document.querySelector('.header_link');

togglebutton.addEventListener('click', () => {
  menu.classList.toggle('active');
  link.classList.toggle('active');
});
