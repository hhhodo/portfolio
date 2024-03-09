
setTimeout(function() {
    // 로딩이 완료되면 로딩 페이지를 숨기고 본문 내용을 표시합니다.
    loadText.style.opacity = '0';
    // CSS 애니메이션의 트랜지션 완료 이벤트를 대기합니다.
    loading_page.addEventListener('transitionend', function() {
        // 로딩 페이지를 숨깁니다.
        loading_page.style.opacity = '0';
        loading_page.style.display = 'none';
    });

    mainTextBox.style.opacity = '1';
}, 2000)

//===============네비게이션메뉴====================//
const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".overlay");
const mouseCursor = document.querySelector(".mouse_cursor");
const blueCursor = document.querySelector('.blue_gradient');
//===============버튼 불러오기====================//
const navText = document.querySelectorAll(".overlay li");

//================footer 이미지 클릭 시 변경=======//
const footerPuzzle = document.querySelector('.puzzle');
const clickArea = document.querySelector('#click_area');
const footerGif = document.querySelector('#footer-gif');
const footerImg = document.querySelector('.puzzle img');

const footerText = document.querySelector('.click_me');
//==============observer 타겟====================//
const mainHome = document.querySelector('.main_home');
const mainIntro = document.querySelector('.main_intro');
const fooTer = document.querySelector('.footer');

//첫 페이지 observe
const targetArea = document.querySelector('.backgradient');
const hoverArea = document.querySelector('.hoverarea');

//loading
const loading_page = document.getElementById("load");
const loadText = document.querySelector('.loadtext');
const nameText = document.querySelector('.nametext');
const mainTextBox = document.querySelector('.main_text_box');

/*
setTimeout(function() {
    loadText.style.opacity = '0';
    setTimeout(function(){
        loading_page.style.opacity = '0';
    },500)
},3000);
*/
//로딩 완료시 등장하는 애들
setTimeout(function() {
    LottieInteractivity.create({
    player: '#name-text',
    mode: 'chain',
    actions: [{
        state: 'autoplay'
    }]
    });
}, 1900)

//scroll down 유도
const scrollDown = document.getElementById('scroll-down')

var scrollPlz = setTimeout(function (){
    scrollDown.style.transition = 'all 500ms';
    scrollDown.style.opacity = '1';
},5000)
window.addEventListener('scroll', ()=>{
    //일정 높이 지났을 때 스크롤 사라짐
    if(window.scrollY < 100) {
        scrollDown.style.opacity = '1';
    } else {
        clearTimeout(scrollPlz)
        scrollDown.style.transition = 'all 100ms';
        scrollDown.style.opacity = '0';
    }
})

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
    hamBurger.classList.add('cancel');
    mouseCursor.classList.add('cursor_active');

    clickCount++; // 클릭 수 증가

    if (clickCount % 2 !== 0) {
        navMenu.style.height = '100%';
        navMenu.classList.add('open');
        //hamburger 내에 있는 요소들 클릭 이벤트
        const navAll = document.querySelectorAll('.overlay a')
        navAll.forEach(link => {
            link.addEventListener('click', () => {
                clickCount++; // 클릭 수 증가

                navMenu.style.height = '0';
                hamBurger.classList.remove('cancel');
                mouseCursor.classList.remove('cursor_active');
                setTimeout(() => {
                    navMenu.classList.remove('open')
                }, 300);
            });
        });
    } else {
        navMenu.style.height = '0';
        hamBurger.classList.remove('cancel');
        mouseCursor.classList.remove('cursor_active');
        setTimeout(() => {
            navMenu.classList.remove('open')
        }, 300);
    }
});
hamBurger.addEventListener('mouseover', () => {
    mouseCursor.classList.add('hover');
})
hamBurger.addEventListener('mouseout', () => {
    mouseCursor.classList.remove('hover');
})
//footer 움직임
footerPuzzle.addEventListener('mouseover', ()=>{
    mouseCursor.classList.add('cursor_actives');
})
footerPuzzle.addEventListener('mouseout', ()=>{
    mouseCursor.classList.add('hover')
    setTimeout(() => {
        mouseCursor.classList.remove('cursor_actives');
        mouseCursor.classList.remove('hover');
    }, 300);
    
})
//click event
let clickCounts = 0
clickArea.addEventListener('click',()=>{

    clickCounts++; // 클릭 수 증가
    console.log(clickCount)

    if (clickCounts % 2 !== 0) {
        footerText.style.display = 'none';
        footerImg.style.opacity = '0';
        footerGif.style.display = 'block';

        //처음부터 다시시작
        footerGif.currentTime = 0;
        footerGif.play();
    } else {
        footerText.style.display = 'block';
        footerImg.style.opacity = '1';
        footerGif.style.display = 'none';
        footerGif.pause();
    }
})
}