"use strict";

//===============네비게이션메뉴====================//
var hamBurger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".overlay");
var mouseCursor = document.querySelector(".mouse_cursor");
var blueCursor = document.querySelector('.blue_gradient'); //===============버튼 불러오기====================//

var navText = document.querySelectorAll(".overlay li"); //==============observer 타겟====================//

var mainHome = document.querySelector('.main_home');
var mainIntro = document.querySelector('.main_intro');
var fooTer = document.querySelector('.footer'); //첫 페이지 observe

var targetArea = document.querySelector('.backgradient');
var hoverArea = document.querySelector('.hoverarea'); //fade 효과

window.onload = function () {
  var observer = new IntersectionObserver(function (e) {
    e.forEach(function (fade) {
      if (fade.isIntersecting) {
        fade.target.style.opacity = 1;
      } else {
        fade.target.style.opacity = 0;
      }
    });
  }, {
    threshold: 0.3
  }); //observe

  observer.observe(mainHome);
  observer.observe(mainIntro);
  observer.observe(fooTer); //마우스 커서 변경

  window.addEventListener("mousemove", function (e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY; // 화면 중심 좌표 계산

    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2; // 마우스 좌표와 상반되는 위치 계산

    var oppositeX = centerX + (centerX - mouseX);
    var oppositeY = centerY + (centerY - mouseY);
    mouseCursor.style.left = mouseX + 'px';
    mouseCursor.style.top = mouseY + 'px';
    targetArea.style.left = oppositeX + 'px';
    targetArea.style.top = oppositeY + 'px'; //일정 높이 지났을 때 그라데이션 사라짐

    if (window.scrollY < 800) {
      targetArea.style.display = 'block';
    } else {
      targetArea.style.display = 'none';
    }
  }); //특정 버튼 호버시 커서 변경

  navText.forEach(function (link) {
    link.addEventListener("mouseover", function () {
      mouseCursor.classList.add('hover');
    });
    link.addEventListener("mouseout", function () {
      mouseCursor.classList.remove('hover');
    });
  }); //마우스가 첫 화면의 그라데이션에 호버했을때

  hoverArea.addEventListener("mouseover", function (e) {
    mouseCursor.classList.add('blue_gradient');
  });
  hoverArea.addEventListener("mouseout", function (e) {
    mouseCursor.classList.add('hover');
    setTimeout(function () {
      mouseCursor.classList.remove('blue_gradient');
      mouseCursor.classList.remove('hover');
    }, 300);
  }); //hamburger 버튼 작동 시

  var clickCount = 0;
  navMenu.addEventListener('click', function () {
    hamBurger.classList.toggle('cancel');
    mouseCursor.classList.toggle('cursor_active');
    clickCount++; // 클릭 수 증가

    if (clickCount % 2 !== 0) {
      navMenu.style.height = '100%';
      navMenu.classList.add('open');
    } else {
      navMenu.style.height = '0';
      setTimeout(function () {
        navMenu.classList.remove('open');
      }, 300);
    }
  });
  hamBurger.addEventListener('click', function () {
    hamBurger.classList.toggle('cancel');
    mouseCursor.classList.toggle('cursor_active');
    clickCount++; // 클릭 수 증가

    if (clickCount % 2 !== 0) {
      navMenu.style.height = '100%';
      navMenu.classList.add('open');
    } else {
      navMenu.style.height = '0';
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
};