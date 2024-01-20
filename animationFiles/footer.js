function footer(){
    gsap.from(" footer .f1a span",{
        y:-300,
        duration:1,
        ease:Power6,
        scrollTrigger:{
            trigger:"footer",
            start:"top 60%",
            end:"top 50%",
            // markers:true,
            // scrub:2,
        }
    })
}
export {footer};