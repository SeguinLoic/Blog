document.addEventListener("DOMContentLoaded", () => {

    const cursor = document.querySelector(".cursor");
    const fenetre = document.querySelector(".fenetre");
    let dX = 0;
    let dY = 0;
    let x = 0;
    let y = 0;
    let xPos = 0;
    let yPos = 0;

    function updateDisplay(event) {
        x = event.pageX;
        y = event.pageY;
        // cursor.style.top = y + 'px';
        // cursor.style.left = x + 'px';
    }

    fenetre.addEventListener("mousemove", updateDisplay);
    fenetre.addEventListener("mouseleave", function (e) {
        cursor.classList.add("out");
    });
    fenetre.addEventListener("mouseenter", function (e) {
        cursor.classList.remove("out");
    });

    function animate() {
        dX = x - xPos;
        dY = y - yPos;
        
        xPos += (dX / 10);
        yPos += (dY / 10);

        cursor.style.top = y + 'px';
        cursor.style.left = x + 'px';
        
        requestAnimationFrame(animate);
    }

    animate();

});