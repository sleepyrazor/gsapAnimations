// Button-Cursor animation
//The color of the dot will change once it hovers the button.
//The color of the dot will be the button and button's text opposite.
buttons.forEach(button => {
    document.addEventListener('mousemove', (e) => {
        const isOverButton = e.target.closest('.btn button') !== null;
      
        if (isOverButton) {// sobre el botón
            cursorPunto.classList.add('on-button');
            gsap.to(cursorPunto, { 
                scale: 2,
                duration: 0.2
            });
            gsap.to(cursorLinia, {
                scale: 1.5,
                duration: 0.3
            });
        } else {// no sobre el botón
            cursorPunto.classList.remove('on-button');
            gsap.to(cursorPunto, {
                scale: 1,
                duration: 0.3
            });
            gsap.to(cursorLinia, {
                scale: 1,
                duration: 0.3
            });
        }
    });
});
