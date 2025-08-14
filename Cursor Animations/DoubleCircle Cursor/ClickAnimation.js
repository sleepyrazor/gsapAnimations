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
