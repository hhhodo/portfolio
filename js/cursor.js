/*window.onload = function () {
    const cursor = document.querySelector('.mouse_cursor');

    window.addEventListener("scroll", cursor);
    window.addEventListener("mousemove", cursor);

    function cursor(e) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY - scrollY + "px";
    }
}
==================================
function mouseMove(e) {
  e.preventDefault();
  posX = e.clientX - originX;
  poxY = e.clientY - originY;
  
  if (elmnt.offsetLeft + posX >= 0 && elmnt.offsetLeft + elmnt.offsetWidth + posX <= MAX_WIDTH) {
    x = posX;
  }
  
  if (elmnt.offsetTop + posY >= 0 && elmnt.offsetTop + elmnt.offsetHeight + posY <= MAX_HEIGHT) {
    y = posY;
  }
  
  elmnt.style.transform = `translate(${x}px, ${y}px)`;
}
==
function mouseMove(e) {
  e.preventDefault();
  
  setTimeout(() => {
    const x = e.pageX - target.offsetLeft;
    const y = e.pageY - target.offsetTop;
    target.scrollLeft = scrollLeft - ((x - originX) * SPEED);
    target.scrollTop = scrollTop - ((y - originY) * SPEED);
  }, 0);
}
==
function keepScrolling() {
  if (!(isEdge && scrolling) {
    scrolling = false;
    return;
  }
  
  // X축
  if (elmnt.offsetLeft + x + scrollX >= 0 && elmnt.offsetLeft + x + scrollX + elmnt.offsetWidth <= MAX_WIDTH) {
    canvas.scrollLeft += Math.floor(scrollX);
    x += Math.floor(scrollX);
    originX -= Math.floor(scrollX);
  }
  
  // Y축
  if ((elmnt.offsetTop + y + scrollY) >= 0 && (elmnt.offsetTop + y + scrollY + elmnt.offsetHeight) <= MAX_HEIGHT) {
    canvas.scrollTop += Math.floor(scrollY);
    y += Math.floor(scrollY);
    originY -= Math.floor(scrollY);
  }

  elmnt.style.transform = `translate(${x}px, ${y}px)`;

  window.requestAnimationFrame(keepScrolling);
}
===============================================================
$(function(){

    // CURSOR
    var cursor = $(".cursor"),
    follower = $(".cursor-follower"),
    cursor_img = $(".cursor_img");

    var posX = 0,
        posY = 0;
    var mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, { // 값을 올릴수록 cursor-follower 영역이 늦게 따라옴
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                left: posX - 12,
                top: posY - 12
                }
            });

            TweenMax.set(cursor, {
                css: {
                left: mouseX,
                top: mouseY
                }
            });

            TweenMax.set(cursor_img, {
                css: {
                left: mouseX - 24,
                top: mouseY - 24
                }
            });
        }
    });

    // cursor active area
    $(".active_box").on("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }).on("mouseenter", function(e) {
        $(".cursor, .cursor-follower").css('opacity', 1);
        $(".cursor_img").css('opacity', 0);
    }).on("mouseleave", function(e) {
        $(".cursor, .cursor-follower, .cursor_img").css('opacity', 0);
    });

    // cursor active area (style_2)
    $(".cursor_style_2").on("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }).on("mouseenter", function(e) {
        $(".cursor_img").css('opacity', 1);
        $(".cursor, .cursor-follower").css('opacity', 0);
    }).on("mouseleave", function(e) {
        $(".cursor_img").css('opacity', 0);
        $(".cursor, .cursor-follower").css('opacity', 1);
    });

    // link area css 
    $(".link").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("active");
    }).on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("active");
    })

});




;*/