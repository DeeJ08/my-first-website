const h2 = document.createElement("h2");
h2.textContent = "use arrow keys for movement";
document.querySelector("body").appendChild(h2);

const img = document.getElementById("cat");
const changePoint = window.innerWidth - 90;
const maxRight = window.innerWidth - img.width;
const newImageSrc = "cat.png";
let currentLeft = 30;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      if (currentLeft < maxRight) {
        currentLeft += 10; 
        if (currentLeft >= changePoint) {    
        }
        img.style.left = `${currentLeft}px`;
      }  
    }
});
