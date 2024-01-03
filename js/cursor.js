window.onload = function () {
    const cursor = document.querySelector('.mouse_cursor');

    window.addEventListener("scroll", cursor);
    window.addEventListener("mousemove", cursor);

    function cursor(e) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY - scrollY + "px";
    }
}