
//===============네비게이션메뉴====================//
const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".overlay");
const mouseCursor = document.querySelector(".mouse_cursor");
const blueCursor = document.querySelector('.blue_gradient');
//===============버튼 불러오기====================//
const navText = document.querySelectorAll(".overlay li");


//마우스 커서 변경
window.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  mouseCursor.style.left = mouseX + 'px';
  mouseCursor.style.top = mouseY + 'px';
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

//페이지 이동시 로딩화면 안뜨게
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("load");

    // 첫 방문인지 체크
    if (!sessionStorage.getItem("visited")) {

        // 첫 방문이면 로딩 표시
        loader.style.visibility = "visible";
        loader.style.opacity = "1";

        sessionStorage.setItem("visited", "true");

        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.visibility = "hidden";
            }, 500);
        }, 1800);
    }
});

