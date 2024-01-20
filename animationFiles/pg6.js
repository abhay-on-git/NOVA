function pg6(){
    gsap.from(".h1 h1",{
        y:105,
        duration:1,
        ease:Power6,
        scrollTrigger:{
            trigger:".pg6",
            start:"top 20%",
            end:"top top",
            // markers:true,
            // scrub:2,
        }
    })
}
export {pg6};