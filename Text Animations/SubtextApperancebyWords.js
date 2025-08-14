gsap.registerPlugin(SplitText);

// Cogemos los elementos
const subtext = document.querySelector(".subtext");
const subtext2 = document.querySelector(".subtext2");

// Dividir texto en letras y palabras
const splitSubText=new SplitText(subtext, {type: "words"})
const splitSubText2=new SplitText(subtext2, {type: "words"})
  
//Animación subtítulo en palabras
tl.from(splitSubText.words,{
    y:60,
    opacity:0,
    filter:"blur(16px)",
    stagger:0.12,
    duration:0.7,
    ease:"power2.out"
},"-=0.3")
tl.from(splitSubText2.words,{
    y:60,
    opacity:0,
    filter:"blur(16px)",
    stagger:0.12,
    duration:0.7,
    ease: "power2.out"
}, "-=0.5");

tl.to(".btn", {
    visibility: "visible",
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "back.out(1.2)", 
    delay: 0.1 
}); 
