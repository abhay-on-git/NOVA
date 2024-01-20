function pg1 () {
    document.addEventListener("DOMContentLoaded",()=>{
        let pg1 = document.querySelector(".pg1");
        pg1.style.backgroundSize = "51%";
    })
    gsap.from("#bigh1 span",{
            y:300,
            duration:1,
            ease:Expo.ease,
            stagger:0.5,
        })
}
export {pg1};


