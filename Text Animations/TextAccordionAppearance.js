//Remember to implement in your html file the correct Gsap CDN like the following ones.
//<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
//<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js"></script>

// First declare the gsap plugin
gsap.registerPlugin(SplitText);

// Declare the element
const text = document.querySelector(".text");

// Split text into letters.
const splitText=new SplitText(text, {type: "chars"})

// The title appears from right to left, with a bottom-to-top effect.
const tl=gsap.timeline();
tl.from(splitText.chars,{
    y:100,
    rotationX:90,
    opacity:0,
    color:"#FFFFFF",
    stagger:0.03,
    transformOrigin:"center top",
    perspective:700,
}).to(splitText.chars,{ //You'll see a fade running across it.
    color:"#855f45ff",
    stagger:0.03,
    duration:0.9,
    ease:"power2.out",
});
