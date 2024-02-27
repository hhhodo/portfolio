//===============네비게이션메뉴====================//
const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".overlay");
const mouseCursor = document.querySelector(".mouse_cursor");
const blueCursor = document.querySelector('.blue_gradient');
//===============버튼 불러오기====================//
const navText = document.querySelectorAll(".overlay li");
//================footer 이미지 클릭 시 변경=======//
const footerPuzzle = document.querySelector('.puzzle');
const footerGif = document.querySelector('#footer-gif');

const animatedSrc = footerGif.dataset.animated;
const staticSrc = footerGif.dataset.static;
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

setTimeout(function() {
    loadText.style.opacity = '0';
    setTimeout(function(){
        loading_page.style.opacity = '0';
    },500)
},3000);
//로딩 완료시 등장하는 애들
setTimeout(function() {
    LottieInteractivity.create({
    player: '#name-text',
    mode: 'chain',
    actions: [{
        state: 'autoplay'
    }]
    });
    
    loading_page.style.display = 'none';
}, 3500)
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
footerGif.addEventListener('click',()=>{

    clickCounts++; // 클릭 수 증가

    if (clickCounts % 2 !== 0) {
        footerGif.src = animatedSrc;
        footerText.style.display = 'none';
    } else {
        footerGif.src = staticSrc;
        footerText.style.display = 'block';
    }
})
}