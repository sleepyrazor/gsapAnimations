//Remember to implement in your html file the correct Gsap CDN like the following ones.
//<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
//<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js"></script>

// First declare the gsap plugin
gsap.registerPlugin(SplitText);

// Declare the elements
const subtext = document.querySelector(".subtext");
const subtext2 = document.querySelector(".subtext2");

// Split text into words.
const splitSubText=new SplitText(subtext, {type: "words"})
const splitSubText2=new SplitText(subtext2, {type: "words"})
  
// The title appears from the bottom to the top with a blurring effect.
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
