function pg2(){
    gsap.from(".pg2 .p-div p",{
        y:50,
        duration:1,
        ease:Power2,
        scrollTrigger:{
            trigger:".pg2",
            start:"top 40%",
            end:"top 30%",
            // markers:true,
        }
    })
}
export {pg2};