/*============== toggle icon Navbar=============*/ 
let menuIcon = document.querySelector('#menu-icon');
let navLink = document.querySelector('.nav-links');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navLink.classList.toggle('active');

}

let sections = document.querySelectorAll('section, header');
let navLinks = document.querySelectorAll('nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });
    /*============== stiky Navbar=============*/ 
    let nav = document.querySelector('nav');

    nav.classList.toggle('sticky', window.scrollY > 100);

    /*============== remove toggle icon and Navbar when click navbar link scrol=============*/ 
    
    menuIcon.classList.remove('bx-x');
    navLink.classList.remove('active');
};

/*  ========== Scroll reveal ========= */
ScrollReveal({ 
    loop: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.content, .my-project, .mygallery, .heading', { origin: 'top' });
ScrollReveal().reveal('.projeckt, .gallery, form, .spek-rumah, tr', { origin: 'bottom' });
ScrollReveal().reveal('.content h1, .content p',  { origin: 'top' });

/*  ========== typed Js ========= */
const typed = new Typed('.multiplate-text', {
    strings: ['Front End Web Developer', 'YouTubers', 'Tiktokers'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true 
});

/*  ========== ScrollTop Js ========= */
function scrollTop(){
    const scrollTop = document.getElementById('scrollTopIcon');

    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');

        else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);