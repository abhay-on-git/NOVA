function pg4(){
    gsap.from(".h1 h1",{
        y:105,
        duration:1,
        ease:Power4,
        scrollTrigger:{
            trigger:".pg4",
            start:"top 20%",
            end:"top top",
            // markers:true,
            // scrub:2,
        }
    })
}
export {pg4};