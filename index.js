// gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });


// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();






var tl= gsap.timeline({
    scrollTrigger:{
        trigger:"#home",
        start:"top top ",
        end:"bottom -250%",
        scoller:"#main",
        scrub:1,
        // markers:true,
        pin:true

        
    }
})


tl
    .to("#btm img",{
        rotate:"-180deg",
        scale:1,
        duration:3,
        stagger: .1,
        ease:Power1
    },"hello")



    .to("#top img",{
        scale:1,
        duration:3,
        stagger: .1,
        ease:Power1
    },"hello")

 
    .to("#image img",{
        scale:0,
        duration:2,
        // stagger: .1,
        ease:Power1
    },"hello")



    .to("#center-image h5",{
        opacity:0,
        duration:.5,
        ease:Power1
    },"hello")



    .to("#circle",{
        scale:0.6,
        ease:Power1
    },"hello")


    .to("#gallery",{
        bottom:"-50%",
        duration:2.5,
        ease:Power1
    },"hello")
    


    .to("#gola",{
        top:"50%",
        duration:2,
        scale:1.5,
        eas:Power1
    },"hello")



    .to("#gola",{
        opacity:0,
        duration:2,
        eas:Power1
    },"hello2")



    .to("#small-circle",{
        scale:0,
        duration:2,
        ease:Power1
    },"hello2")



    .to("#circle",{
        scale:0,
        duration:2,
        ease:Power1
    },"hello2")



    .to("#pf",{
        rotate:0,
        bottom:"2%",
        duration:1,
        delay:-.1,
        ease:Power1
    },"hello2")


    .to("#pinkpart",{
        top:"0",
        delay:.5,
        duration:5,
        ease:Power1
    },"hello2")


    .to("#pinkpart",{
        top:"-70%",
        duration:3,
        ease:Power1
    })








// SECOND PAGE.


var tl2= gsap.timeline({
    scrollTrigger:{
        trigger:"#second",
        start:"top top",
        end:"bottom -150%",
        // markers:true,
        scrub:1,
        pin:true
    }
});

tl2
    .to(".circle",{
        scale:1.2,
        top:"50%",
        stagger:.1,
        ease:Power1
    })

    .to(".circle",{
        left:"50%",
        stagger:.2,
        ease:Power1
    })

    .to(".pi",{
        scale:10,
        ease:Power1
    })

    .to(".pi",{
        background:"linear-gradient(to right,#d5a7b4,#b4aad5)",
        ease:Power1
    })



    .to("#s-top h1",{
        left: "-150%",
        duration:5,
        ease:Power1
        
    },"a")


    .to("#two",{
        opacity:0,
        duration:1,
        ease:Power1
    },"a")

    .to("#one",{
        opacity:1,
        duration:2,
        delay:1,
        ease:Power1
    },"a")


