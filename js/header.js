const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".overlay");
const mouseCursor = document.querySelector(".mouse_cursor");
//===============버튼 불러오기====================//

//==============observer 타겟====================//
const mainHome = document.querySelector('.main_home');
const mainIntro = document.querySelector('.main_intro');
const fooTer = document.querySelector('.footer');
//첫 페이지 observe
const targetPage = document.querySelector('.main_home');

//
window.onload = function() {

const observer = new IntersectionObserver((e) => {
    
    //특정 요소 오퍼시티 조절
    e.forEach((fade) => {
        if(fade.isIntersecting){
            fade.target.style.opacity = 1;
        } else {
            fade.target.style.opacity = 0;
        }
    })
}, { threshold: 0.3 });

//observe
observer.observe(mainHome);
observer.observe(mainIntro);
observer.observe(fooTer);
observer.observe(targetPage);

//마우스 커서 변경
window.addEventListener("mousemove", (e) => {
    
    var pY = e.pageY;
    console.log(pY);
    if(pY <= 1200){
        mouseCursor.classList.add('blue_gradient');
    } else {
        mouseCursor.classList.remove('blue_gradient');
    };

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    mouseCursor.style.left = mouseX + 'px';
    mouseCursor.style.top = mouseY + 'px';
})

//마우스가 첫화면일때
    

//hamburger 버튼 작동 시
hamBurger.addEventListener('click', () => {

    hamBurger.classList.toggle('cancel');
    navMenu.classList.toggle('open');
    mouseCursor.classList.toggle('cursor_active');
});

//창을 클릭하면 네비게이션 메뉴 사라지게
}
