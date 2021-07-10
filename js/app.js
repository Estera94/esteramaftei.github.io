const links = document.querySelectorAll('.navbar-nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach(section =>{
        let sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        console.log(sectionHeight)
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