
 // First declare the gsap plugin
gsap.registerPlugin(ScrollTrigger);
// Creates an array to go all over the elements
gsap.utils.toArray(".words").forEach(word => {
  gsap.fromTo(word, 
    { rotationX: -90, rotationY: -40, opacity: 0, },
    {
      rotationX: 0,
      opacity: 1,
      y: -50,
      duration: 0.5,
      scrollTrigger: {
        trigger: word,
        start: "top 90%",
        end: "top 50%",
        scrub: true
      }
    }
  );
});
