const menu_btn =  document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav')
const nav_bottom = document.querySelector('.nav__menu')
const header = document.getElementById("#head")
const toggleMenu = document.querySelector(".menu");
let tabs = document.querySelectorAll('.tabs__toggle')
let contents = document.querySelectorAll('.tabs__contents')
// const nav__menu = document.querySelector('nav__menu')
let sidebar = document.querySelector('.side-bar-1')


// console.log(tabs,contents)
tabs.forEach((tab,index) => {
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


menu_btn.addEventListener('click',function(){
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
  nav_bottom.classList.toggle('is-active')
  // nav__menu.classList.toggle('menu-open')


});

// document.onclick = function(e) {
//   if(e.target.id !=='header' && e.target.id !=='toggleMenu'){
//     toggleMenu.classList.remove('active')
//   }
// }


function menuToggle(){
  toggleMenu.classList.toggle('active')
}


window.addEventListener('mouseup',function(e){
    if(e.target.id !=='header' && e.target.id !=='toggleMenu'){
      toggleMenu.classList.remove('active')
    }
    if(e.target.id !=='header' && e.target.id !=='sidebar'){
      mobile_menu.classList.remove('active')
    }
  // var menu = document.getElementsByClassName('.menu');
  // console.log(menu);
  // if(event.target != menu && event.target.parentNode != menu){
  //     menu.style.display = 'none';
  // }
});  



