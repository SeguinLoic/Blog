document.addEventListener("DOMContentLoaded", () => {

    const cursor = document.querySelector(".cursor");

    function updateDisplay(event) {
        let x = event.pageX;
        let y = event.pageY;
        cursor.style.top = y;
        cursor.style.left = x;
        console.log(x);
        console.log(y);
    }

    document.addEventListener("mousemove", updateDisplay);
});