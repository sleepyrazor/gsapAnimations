//Cursor move Animation
//The outer circle is dragged by the cursor (dot)
window.addEventListener("mousemove", function(e){
    const posX= e.clientX;
    const posY= e.clientY;
    cursorPunto.style.left=`${posX}px`;
    cursorPunto.style.top=`${posY}px`;

    gsap.to(cursorLinia, {
        left: posX,
        top: posY,
        duration: 0.3,
        ease: "power2.out"
    });
});
//Cursor Animation when "click"
//The outer circle will expand and change color
document.addEventListener('mousedown', () => {
    gsap.to(cursorLinia, {
        scale: 1.8,
        border: '2px solid #6a8753ff',
        duration: 0.1
    });
});
document.addEventListener('mouseup', () => {
    gsap.to(cursorLinia, {
        scale: 1,
        border: '2px solid gray',
        duration: 0.3
    });
});
