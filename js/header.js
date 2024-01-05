const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".overlay");
const mouseCursor = document.querySelector(".mouse_cursor");
//===============버튼 불러오기====================//

//==============observer 타겟====================//
const mainHome = document.querySelector('.main_home');
const mainIntro = document.querySelector('.main_intro');
const fooTer = document.querySelector('.footer');
//첫 페이지 observe
const targetArea = document.querySelector('.backgradient');

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

//마우스 커서 변경
window.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // 화면 중심 좌표 계산
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // 마우스 좌표와 상반되는 위치 계산
    const oppositeX = centerX + (centerX - mouseX);
    const oppositeY = centerY + (centerY - mouseY);

    mouseCursor.style.left = mouseX + 'px';
    mouseCursor.style.top = mouseY + 'px';
    targetArea.style.left = oppositeX + 'px';
    targetArea.style.top = oppositeY + 'px';
});
//마우스가 첫화면일때
targetArea.addEventListener("mouseenter", (e) => {
    console.log("Mouse entered:",targetArea);
    mouseCursor.classList.add('blue_gradient');
});
targetArea.addEventListener("mouseleave", (e) => {
    console.log("Mouse leaved:",targetArea);
    mouseCursor.classList.remove('blue_gradient');
});

//hamburger 버튼 작동 시
hamBurger.addEventListener('click', () => {

    hamBurger.classList.toggle('cancel');
    navMenu.classList.toggle('open');
    mouseCursor.classList.toggle('cursor_active');
});

//창을 클릭하면 네비게이션 메뉴 사라지게
}
