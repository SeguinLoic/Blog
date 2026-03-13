// document.addEventListener("DOMContentLoaded", () => {

//     const cursor = document.querySelector(".cursor");
//     const fenetre = document.querySelector(".fenetre");
//     let dX = 0;
//     let dY = 0;
//     let x = 0;
//     let y = 0;
//     let xPos = 0;
//     let yPos = 0;

//     fenetre.addEventListener("mousemove", updateDisplay, false);

//     function updateDisplay(event) {
//         x = event.pageX;
//         y = event.pageY;
//         // cursor.style.top = y + 'px';
//         // cursor.style.left = x + 'px';
//     }

//     function animate() {
//         dX = x - xPos;
//         dY = y - yPos;
        
//         xPos += (dX / 10);
//         yPos += (dY / 10);

//         cursor.style.top = y + 'px';
//         cursor.style.left = x + 'px';
        
//         requestAnimationFrame(animate);
//     }

//     animate();

//     fenetre.addEventListener("mouseleave", function (e) {
//         cursor.classList.add("out");
//     });

//     fenetre.addEventListener("mouseenter", function (e) {
//         cursor.classList.remove("out");
//     });

// });



let canvas = document.querySelector(".fenetre");
 
let canvasPos = getPosition(canvas);
let mouseX = 0;
let mouseY = 0;
let sqSize = 100;
let xPos = 0;
let yPos = 0;
let dX = 0;
let dY = 0;
 
canvas.addEventListener("mousemove", setMousePosition, false);
 
function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
}
 
function animate() {
  dX = mouseX - xPos;
  dY = mouseY - yPos;
 
  xPos += (dX / 10);
  yPos += (dY / 10);
 
  context.clearRect(0, 0, canvas.width, canvas.height);
 
  context.fillStyle = "#00CCFF";
  context.fillRect(xPos - sqSize / 2, yPos - sqSize / 2, sqSize,sqSize);
 
  requestAnimationFrame(animate);
}
animate();
 
// deal with the page getting resized or scrolled
window.addEventListener("scroll", updatePosition, false);
window.addEventListener("resize", updatePosition, false);
 
function updatePosition() {
  canvasPos = getPosition(canvas);
}
 
// Helper function to get an element's exact position
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}   