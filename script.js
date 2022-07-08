const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav')
const nav_bottom = document.querySelector('.nav__menu')
const toggleMenu = document.querySelector(".menu");
const rightEnd = document.querySelector('.right-end-nav')
const profile = document.querySelector('.profile')
let tabs = document.querySelectorAll('.tabs__toggle')
let contents = document.querySelectorAll('.tabs__contents')

// profile-sec-img
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

menu_btn.addEventListener('click', function (e) {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
  nav_bottom.classList.toggle('is-active')

});


function menuToggle() {
  toggleMenu.classList.toggle('active')
}
