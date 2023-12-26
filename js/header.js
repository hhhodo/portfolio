const home = document.querySelector('.main_home');
const homeHeight = home.offsetHeight;
const headerGnb = document.querySelector('.header');

document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        headerGnb.style.top = '-8rem';
    } else {
        headerGnb.style.top = '0';
    }
})

/** jQuery 끝나고 고치기 */