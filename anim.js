document.addEventListener('DOMContentLoaded', () => {

    gsap.from(".my-name",{
        scale:0,
        x:"-50%",
        delay:1,
        duration:1.5, 
        
    })
    gsap.from("nav",{
        y:"-100%",
        delay:1,
        duration:1.5, 
        
    })

    gsap.to("#heading",{
        transform: "translateX(-100%)",
        scrollTrigger:{
            trigger:"#heading",
            scroller: "body",
            markers:true,
            start:"top 0%",
            end:"top -100%",
            scrub:2,
            pin:true


        }
    })

});



