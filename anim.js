document.addEventListener('DOMContentLoaded', () => {

    gsap.from(".niroula",{
        scale:0,
        y:"100%",
        delay:1,
        duration:1.5, 
        
    })
    gsap.from(".sanjaya",{
        scale:0,
        y:"-100%",
        delay:1,
        duration:1.5, 
        
    })

    gsap.to("#heading",{
        transform: "translateX(-100%)",
        scrollTrigger:{
            trigger:"#heading",
            scroller: "body",
            start:"top 0%",
            end:"top -100%",
            scrub:2,
            pin:true


        }
    })
    gsap.to("#second-heading",{
        transform: "translateX(-100%)",
        scrollTrigger:{
            trigger:"#second-heading",
            scroller: "body",
            start:"top 0%",
            end:"top -200%",
            scrub:2,
            pin:true


        }
    })

});



