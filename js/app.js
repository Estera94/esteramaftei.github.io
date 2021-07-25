const links = document.querySelectorAll('.navbar-nav a');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelector(".navbar-nav");
const aNavigation = document.querySelectorAll(".navbar-nav a");
const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement:'.title',
    triggerHook: 0.4,
    reverse: false
}).setClassToggle('.esteraName', 'colorTransition')
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement:'.aboutTitle',
    triggerHook: 0.6
})  .setClassToggle('.aboutTitle', 'colorTransition')
    .addTo(controller)

new ScrollMagic.Scene({
    triggerElement:'.portfolioTitle',
    triggerHook: 0.6
})  .setClassToggle('.portfolioTitle', 'colorTransition')
    .addTo(controller)

new ScrollMagic.Scene({
    triggerElement:'.contactTitle',
    triggerHook: 0.6
})  .setClassToggle('.contactTitle', 'colorTransition')
    .addTo(controller)

const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next,.swiper-pagination',
        prevEl: '.swiper-button-prev, .swiper-pagination',
    },
});

window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach(section =>{
        let sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 4)){
            current = section.getAttribute('id')
        }
    })
    links.forEach( a => {
        a.classList.remove('active')
        if(a.classList.contains(current)){
            a.classList.add('active')
        }
    })
})

document.querySelector('.hamburger-button').addEventListener('click', ()=> {
        navLinks.classList.toggle("open");
        aNavigation.forEach(a => {
            a.addEventListener('click', ()=>{
               navLinks.classList.remove("open");
            })
        });
})

document.querySelector('.footer-btn').addEventListener('click', ()=> {
    document.querySelector('.modal').classList.toggle('show-modal')
})

document.querySelector(".close-button").addEventListener("click", e => {
    document.querySelector('.modal').classList.toggle("show-modal");
});

