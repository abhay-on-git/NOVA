function pg3(){
    gsap.to(".pg3img",{
        bottom:`10%`,
        duration:3,
        ease:Power3,
        scrollTrigger:{
            trigger:".pg3",
            start:"top 30%",
            end:"top 10%",
            // markers:true,
            scrub:2,
        }
    })
}
export {pg3};