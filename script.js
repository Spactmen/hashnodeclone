const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav')
const nav_bottom = document.querySelector('.nav__menu')
const header = document.getElementById("#head")
const head = document.queryselector('.header')
const toggleMenu = document.querySelector(".menu");
let tabs = document.querySelectorAll('.tabs__toggle')
let contents = document.querySelectorAll('.tabs__contents')


tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    contents.forEach((content) => {
      content.classList.remove('isactive')
    });
    tabs.forEach((tab) => {
      tab.classList.remove('isactive')
    });
    contents[index].classList.add('isactive');
    tabs[index].classList.add('isactive');
  });
})

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
  nav_bottom.classList.toggle('is-active')

});

window.addEventListener('mouseover', function (e) {
  if (/*e.target.id !== 'nav_bottom' && */e.target.id !== 'mobile_menu' && e.target.id !== 'menu_btn') {
    menu_btn.classList.remove('is-active');
    mobile_menu.classList.remove('is-active');
    nav_bottom.classList.remove('is-active')
  }
})

function menuToggle() {
  toggleMenu.classList.toggle('active')
}

window.addEventListener('mouseover', function (e) {
  if (e.target.id !== 'head' && e.target.id !== 'toggleMenu') {
    toggleMenu.classList.remove('active')
  }
});




