function pg7(){
    gsap.from(".h1 h1",{
        y:105,
        duration:1,
        ease:Power7,
        scrollTrigger:{
            trigger:".pg7",
            start:"top 20%",
            end:"top top",
            // markers:true,
            // scrub:2,
        }
    })
}
export {pg7};