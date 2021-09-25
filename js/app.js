const nav= document.querySelector('.nav__container');
const menu= document.querySelector('.menu__hamburger');

menu.addEventListener('click', ()=>{
    nav.classList.toggle('active');
})