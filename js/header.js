//===============네비게이션메뉴====================//
const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".overlay");
const mouseCursor = document.querySelector(".mouse_cursor");
const blueCursor = document.querySelector('.blue_gradient');
//===============버튼 불러오기====================//
const navText = document.querySelectorAll(".overlay li");

//==============observer 타겟====================//
const mainHome = document.querySelector('.main_home');
const mainIntro = document.querySelector('.main_intro');
const fooTer = document.querySelector('.footer');

//첫 페이지 observe
const targetArea = document.querySelector('.backgradient');
const hoverArea = document.querySelector('.hoverarea');

//fade 효과
window.onload = function() {

const observer = new IntersectionObserver((e) => {
    
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
    
    //일정 높이 지났을 때 그라데이션 사라짐
    if(window.scrollY < 800) {
        targetArea.style.display = 'block';
    } else {
        targetArea.style.display = 'none';
    }
});
//특정 버튼 호버시 커서 변경
navText.forEach(link => {
    link.addEventListener("mouseover", ()=> {
        mouseCursor.classList.add('hover');
    })
    link.addEventListener("mouseout", ()=> {
        mouseCursor.classList.remove('hover');
    })
});

//마우스가 첫 화면의 그라데이션에 호버했을때
hoverArea.addEventListener("mouseover", (e) => {
    mouseCursor.classList.add('blue_gradient');
});
hoverArea.addEventListener("mouseout", (e) => {
    mouseCursor.classList.add('hover');
    setTimeout(() => {
        mouseCursor.classList.remove('blue_gradient');
        mouseCursor.classList.remove('hover');
    }, 300);
});


//hamburger 버튼 작동 시
let clickCount = 0;

hamBurger.addEventListener('click', () => {
    hamBurger.classList.toggle('cancel');
    mouseCursor.classList.toggle('cursor_active');
    clickCount++; // 클릭 수 증가

    if (clickCount % 2 !== 0) {
        // 홀수 번째 클릭일 때
        navMenu.style.height = "100vh";
        navMenu.classList.add('open');
    } else {
        // 짝수 번째 클릭일 때
        navMenu.style.height = "0";
        navMenu.classList.remove('open');
    }
});

// transitionend 이벤트를 사용하여 애니메이션이 완료된 후에 클래스 추가/제거
navMenu.addEventListener('transitionend', () => {
    if (navMenu.classList.contains('open')) {
        navMenu.style.height = "100vh";
    } else {
        navMenu.style.height = "0";
    }
});
hamBurger.addEventListener('mouseover', () => {
    mouseCursor.classList.add('hover');
})
hamBurger.addEventListener('mouseout', () => {
    mouseCursor.classList.remove('hover');
})

}