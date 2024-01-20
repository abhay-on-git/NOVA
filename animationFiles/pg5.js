function pg5(){
    gsap.from(".h1 h1",{
        y:105,
        duration:1,
        ease:Power5,
        scrollTrigger:{
            trigger:".pg5",
            start:"top 20%",
            end:"top top",
            // markers:true,
            // scrub:2,
        }
    })
}
export {pg5};