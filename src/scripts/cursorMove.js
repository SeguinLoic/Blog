document.addEventListener("DOMContentLoaded", () => {

    const cursor = document.querySelector(".cursor");

    function updateDisplay(event) {
        let x = event.pageX;
        let y = event.pageY;
        console.log(x);
        console.log(y);
    }

    cursor.addEventListener("mousemove", updateDisplay);
    
});