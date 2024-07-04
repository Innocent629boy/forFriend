import "./style.css";
import gsap from "gsap";

const song = document.querySelector('#audio');
const tl = gsap.timeline();

tl.to("#loader", {
    opacity: 0,
    duration: 1,
    ease: "expo",
    delay: 8

})
tl.to("#loader", {
    display: "none",
    duration: 2,
})
tl.to("#one", {
    opacity: 1,
    duration:1,
})
tl.to("#two", {
    opacity: 1,
    duration:1,
})

tl.to("#songplay", { // Animate opacity for visual cue
    duration: 2,
    ease:"power1",
    opacity: 1,
   
});
tl.to('#play',{
    opacity: 1,
    duration:0.5, 
    onComplete: () => {
      song.play(); // Play audio on animation completion
    }
})
tl.to('#last',{
    opacity: 1,
    duration:0.5,
    delay: 10
})
