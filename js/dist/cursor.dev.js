"use strict";

//===============네비게이션메뉴====================//
var hamBurger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".overlay");
var mouseCursor = document.querySelector(".mouse_cursor");
var blueCursor = document.querySelector('.blue_gradient'); //===============버튼 불러오기====================//

var navText = document.querySelectorAll(".overlay li"); //마우스 커서 변경

window.addEventListener("mousemove", function (e) {
  var mouseX = e.clientX;
  var mouseY = e.clientY;
  mouseCursor.style.left = mouseX + 'px';
  mouseCursor.style.top = mouseY + 'px';
}); //특정 버튼 호버시 커서 변경

navText.forEach(function (link) {
  link.addEventListener("mouseover", function () {
    mouseCursor.classList.add('hover');
  });
  link.addEventListener("mouseout", function () {
    mouseCursor.classList.remove('hover');
  });
}); //hamburger 버튼 작동 시

var clickCount = 0;
hamBurger.addEventListener('click', function () {
  hamBurger.classList.add('cancel');
  mouseCursor.classList.add('cursor_active');
  clickCount++; // 클릭 수 증가

  if (clickCount % 2 !== 0) {
    navMenu.style.height = '100%';
    navMenu.classList.add('open'); //hamburger 내에 있는 요소들 클릭 이벤트

    var navAll = document.querySelectorAll('.overlay a');
    navAll.forEach(function (link) {
      link.addEventListener('click', function () {
        clickCount++; // 클릭 수 증가

        navMenu.style.height = '0';
        hamBurger.classList.remove('cancel');
        mouseCursor.classList.remove('cursor_active');
        setTimeout(function () {
          navMenu.classList.remove('open');
        }, 300);
      });
    });
  } else {
    navMenu.style.height = '0';
    hamBurger.classList.remove('cancel');
    mouseCursor.classList.remove('cursor_active');
    setTimeout(function () {
      navMenu.classList.remove('open');
    }, 300);
  }
});
hamBurger.addEventListener('mouseover', function () {
  mouseCursor.classList.add('hover');
});
hamBurger.addEventListener('mouseout', function () {
  mouseCursor.classList.remove('hover');
});