document.addEventListener("DOMContentLoaded", () => {

    const cursor = document.querySelector(".cursor");
    const fenetre = document.querySelector(".fenetre");

    function updateDisplay(event) {
        let x = event.pageX;
        let y = event.pageY;
        cursor.style.top = y + 'px';
        cursor.style.left = x + 'px';
    }

    fenetre.addEventListener("mousemove", updateDisplay);
    fenetre.addEventListener("mouseleave", function (e) {
        cursor.classList.add("out");
    });
    fenetre.addEventListener("mouseenter", function (e) {
        cursor.classList.remove("out");
    });

});