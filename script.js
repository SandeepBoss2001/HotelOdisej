function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco()

var hero = gsap.timeline()

hero.to(".hero",{
  scale:1,
  delay:1.8,
  borderRadius:"0px",
  
},"a")
hero.to(".herobg",{
    scale:1.1,
    delay:1.82,
    borderRadius:"0px",
    
},"a")


gsap.from(".js-navigation-logo",{
   y: "-40px",
   delay:1,
   opacity:0,
})
gsap.from(".menu",{
  y: "-40px",
  delay:2.2,
  opacity:0,
})
gsap.from(".sidebtn",{
  y: "-40px",
  opacity:0,
  delay:2.4,
})

function split(){
  var clutter = ''
  document.querySelector(".grow").textContent.split("").forEach(function(char){
    clutter += `<span>${char}</span>`
  })
  document.querySelector(".grow").innerHTML = clutter
}
split() 

// 
gsap.to(".grow span",{
scrollTrigger:{
  scrub: 3,
  trigger: `.grow span`,
  
  //   set start end according to preference
  start: `top 70%`,
  end: `100% 0%`,
  scroller: `#main`,

},
stagger:0.26,
color:"#e3e3c4",
})

gsap.to(".u-icon--separator-main ",{
  scrollTrigger:{
    scrub: 2,
    trigger: `.wrap > .elm2`,
  
    //   set start end according to preference
    start: `0% 90%`,
    end: `100% 0%`,
    scroller: `#main`,
  
  },
  stagger:0.26,
  x:"100px",
  },"sath")

  gsap.to(".u-icon--separator-secondary ",{
    scrollTrigger:{
      scrub: 2,
      trigger: `.wrap > .elm2`,
     
      //   set start end according to preference
      start: `0% 90%`,
      end: `100% 0%`,
      scroller: `#main`,
    
    },
    stagger:0.26,
    x:"-500px",
    },"sath")

    // 
    function splitTwo(){
      var clutterTwo = ''
      document.querySelector(".grow2").textContent.split("").forEach(function(char){
        clutterTwo += `<span>${char}</span>`
      })
      document.querySelector(".grow2").innerHTML = clutterTwo
    }
  splitTwo()
  gsap.to(".grow2 span",{
    scrollTrigger:{
      scrub: 3,
      trigger: `.grow2 span`,
    
      //   set start end according to preference
      start: `-50% 90%`,
      end: `100% 50%`,
      scroller: `#main`,
    
    },
    stagger:0.26,
    color:"#434b34",
    })

    
function splitThree(){
    var clutter = ''
    document.querySelector(".grow3").textContent.split("").forEach(function(char){
      clutter += `<span>${char}</span>`
    })
    document.querySelector(".grow3").innerHTML = clutter
  }
  splitThree() 
  gsap.to(".grow3 span",{
    scrollTrigger:{
      scrub: 3,
      trigger: `.grow3 span`,
    
      //   set start end according to preference
      start: `-50% 90%`,
      end: `100% 50%`,
      scroller: `#main`,
    
    },
    stagger:0.26,
    color:"#e3e3c4",
    })
    // 
    function splitFour(){
      var clutter = ''
      document.querySelector(".grow4").textContent.split("").forEach(function(char){
        clutter += `<span>${char}</span>`
      })
      document.querySelector(".grow4").innerHTML = clutter
    }
    splitFour() 
    gsap.to(".grow4 span",{
      scrollTrigger:{
        scrub: 3,
        trigger: `.grow4 span`,
      
        //   set start end according to preference
        start: `-50% 90%`,
        end: `100% 50%`,
        scroller: `#main`,
      
      },
      stagger:0.26,
      color:"#434b34",
      })
    // svg

    gsap.to(".page5svg ",{
        scrollTrigger:{
          scrub: 2,
          trigger: `#page_5 > .page5elm1`,
        
          //   set start end according to preference
          start: `0% 90%`,
          end: `100% 0%`,
          scroller: `#main`,
        
        },
       
        x:"-200px",
        })
        gsap.to(".page5svg3 ",{
            scrollTrigger:{
              scrub: 2,
              trigger: `#page_5 > .page5elm2`,
          
              //   set start end according to preference
              start: `0% 90%`,
              end: `100% 20%`,
              scroller: `#main`,
            
            },
          
            x:"-200px",
            })

            //Page 1 animation
            gsap.to(".logo ",{
              scrollTrigger:{
                scrub: 2,
                trigger: `.nav`,
           
                //   set start end according to preference
                start: `0% 0%`,
                pin:true,
                end: `300% 0%`,
                scroller: `#main`,
              
              },
              transform: "translate(-30%, 0%)",
              scale:1,
            })
            gsap.to(".hero ",{
              scrollTrigger:{
                scrub: 2,
                trigger: `#page_1`,
           
                //   set start end according to preference
                start: `100% 50%`,
               
                end: `100% 50%`,
                scroller: `#main`,
              
              },
              opacity:"0.6",
            })
            //page2 timeline

            var page2 = gsap.timeline({
              scrollTrigger:{
                trigger:`#page_3`,
                scrub: 2,
                start: `20% 80%`,
              
                end: `60% 80%`,
                scroller: `#main`,

              }
            })
            page2.from(".wrap1 p",{
              opacity:"0",
              y:"30px",
            },"a")
            page2.from(".elem2 .wrap2 .page3img2",{
              opacity:"0",
              y:"30px",
            },"a")
            
           
         
            page2.from(".page3btn",{
              opacity:"0",
              y:"30px",
            })
            page2.from(".page3img1",{
              opacity:"0",
              y:"30px",
            })
            page2.from(".page3img3",{
              opacity:"0",
              y:"30px",
            })

            // 

            var page5 = gsap.timeline({
              scrollTrigger:{
                trigger:`.page_center`,
                scrub: 2,
                start: `0% 95%`,
             
                end: `65% 85%`,
                scroller: `#main`,

              }
            })
            page5.from(".page5box1",{
              opacity:"0",
              y:"30px",
            },"a")
            page5.from(".page5box3",{
              opacity:"0",
              y:"30px",
            },"a")
            page5.from(".page5box2",{
              opacity:"0",
              y:"30px",
            })

            // page6
            var page6 = gsap.timeline({
              scrollTrigger:{
                trigger:`.page_6centr`,
                scrub: 2,
                start: `-20% 100%`,
             
                end: `60% 80%`,
                scroller: `#main`,

              }
            })
            page6.from(".page6one",{
             
              x:"50%",
            },"a")
            page6.from(".page6three",{
             
              x:"-50%",
            },"a")
            page6.from(".page6otwo",{
              opacity:"0",
              y:"60px",
             
            })
            page6.from(".page6explore",{
              opacity:"0",
              y:"60px",
             
            })

            // page4 
    const box = document.querySelector(".hover1");

    const explore1 = document.querySelector(".hoverbtn1");
    const exploretxt1 = document.querySelector(".exploretxt1");
    const exploresvg1 = document.querySelector("#exploresvg1");
    const imgbox = document.querySelector(".hover1 .img");
    const page4Content = document.querySelector(".content1");
    const page4Text = document.querySelector(".content1 h3");
    const page4PText = document.querySelector(".content1 p");

    box.addEventListener("mouseenter",function(){
      imgbox.style.left = "0%"
      box.style.backgroundColor = "#434b34"
      page4Content.style.paddingLeft= "28%"
      page4Text.style.color = "#e3e3c4"
      page4PText.style.color = "#e3e3c4"
      explore1.style.backgroundColor ="#e3e3c4"
      exploretxt1.style.display = "none"
      exploresvg1.style.display = "block"
    })

    box.addEventListener("mouseleave",function(){
      box.style.backgroundColor = "#F7F7EE"
      imgbox.style.left = "-25%"
      page4Content.style.paddingLeft= "5%"
      page4Text.style.color = "#434b34"
      page4PText.style.color = "#434b34"
      explore1.style.backgroundColor ="#5b6647"
      exploretxt1.style.display = "block"
      exploresvg1.style.display = "none"
    })

// 
const box2 = document.querySelector(".hover2");
const explore2 = document.querySelector(".hoverbtn2");
const exploretxt2 = document.querySelector(".exploretxt2");
const exploresvg2 = document.querySelector("#exploresvg2");
const imgbox2 = document.querySelector(".hover2 .img");
const page4Content2 = document.querySelector(".content2");
const page4Text2 = document.querySelector(".content2 h3");
const page4PText2 = document.querySelector(".content2 p");

box2.addEventListener("mouseenter",function(){
  imgbox2.style.left = "0%"
  box2.style.backgroundColor = "#434b34"
  page4Content2.style.paddingLeft= "28%"
  page4Text2.style.color = "#e3e3c4"
  page4PText2.style.color = "#e3e3c4"
  explore2.style.backgroundColor ="#e3e3c4"
  exploretxt2.style.display = "none"
  exploresvg2.style.display = "block"
})

box2.addEventListener("mouseleave",function(){
  box2.style.backgroundColor = "#F7F7EE"
  imgbox2.style.left = "-25%"
  page4Content2.style.paddingLeft= "5%"
  page4Text2.style.color = "#434b34"
  page4PText2.style.color = "#434b34"
  explore2.style.backgroundColor ="#5b6647"
  exploretxt2.style.display = "block"
  exploresvg2.style.display = "none"
})
// 

const box3 = document.querySelector(".hover3");
const explore3 = document.querySelector(".hoverbtn3");
const exploretxt3 = document.querySelector(".exploretxt3");
const exploresvg3 = document.querySelector("#exploresvg3");
const imgbox3 = document.querySelector(".hover3 .img");
const page4Content3 = document.querySelector(".content3");
const page4Text3 = document.querySelector(".content3 h3");
const page4PText3 = document.querySelector(".content3 p");

box3.addEventListener("mouseenter",function(){
  imgbox3.style.left = "0%"
  box3.style.backgroundColor = "#434b34"
  page4Content3.style.paddingLeft= "28%"
  page4Text3.style.color = "#e3e3c4"
  page4PText3.style.color = "#e3e3c4"
  explore3.style.backgroundColor ="#e3e3c4"
  exploretxt3.style.display = "none"
  exploresvg3.style.display = "block"
})

box3.addEventListener("mouseleave",function(){
  box3.style.backgroundColor = "#F7F7EE"
  imgbox3.style.left = "-25%"
  page4Content3.style.paddingLeft= "5%"
  page4Text3.style.color = "#434b34"
  page4PText3.style.color = "#434b34"
  explore3.style.backgroundColor ="#5b6647"
  exploretxt3.style.display = "block"
  exploresvg3.style.display = "none"
})
// 
const box4 = document.querySelector(".hover4");
const explore4 = document.querySelector(".hoverbtn4");
const exploretxt4 = document.querySelector(".exploretxt4");
const exploresvg4 = document.querySelector("#exploresvg4");
const imgbox4 = document.querySelector(".hover4 .img");
const page4Content4 = document.querySelector(".content4");
const page4Text4 = document.querySelector(".content4 h3");
const page4PText4 = document.querySelector(".content4 p");

box4.addEventListener("mouseenter",function(){
  imgbox4.style.left = "0%"
  box4.style.backgroundColor = "#434b34"
  page4Content4.style.paddingLeft= "28%"
  page4Text4.style.color = "#e3e3c4"
  page4PText4.style.color = "#e3e3c4"
  explore4.style.backgroundColor ="#e3e3c4"
  exploretxt4.style.display = "none"
  exploresvg4.style.display = "block"
})

box4.addEventListener("mouseleave",function(){
  box4.style.backgroundColor = "#F7F7EE"
  imgbox4.style.left = "-25%"
  page4Content4.style.paddingLeft= "5%"
  page4Text4.style.color = "#434b34"
  page4PText4.style.color = "#434b34"
  explore4.style.backgroundColor ="#5b6647"
  exploretxt4.style.display = "block"
  exploresvg4.style.display = "none"
})
// 
const box5 = document.querySelector(".hover5");
const explore5 = document.querySelector(".hoverbtn5");
const exploretxt5 = document.querySelector(".exploretxt5");
const exploresvg5 = document.querySelector("#exploresvg5");
const imgbox5 = document.querySelector(".hover5 .img");
const page4Content5 = document.querySelector(".content5");
const page4Text5 = document.querySelector(".content5 h3");
const page4PText5 = document.querySelector(".content5 p");

box5.addEventListener("mouseenter",function(){
  imgbox5.style.left = "0%"
  box5.style.backgroundColor = "#434b34"
  page4Content5.style.paddingLeft= "28%"
  page4Text5.style.color = "#e3e3c4"
  page4PText5.style.color = "#e3e3c4"
  explore5.style.backgroundColor ="#e3e3c4"
  exploretxt5.style.display = "none"
  exploresvg5.style.display = "block"
})

box5.addEventListener("mouseleave",function(){
  box5.style.backgroundColor = "#F7F7EE"
  imgbox5.style.left = "-25%"
  page4Content5.style.paddingLeft= "5%"
  page4Text5.style.color = "#434b34"
  page4PText5.style.color = "#434b34"
  explore5.style.backgroundColor ="#5b6647"
  exploretxt5.style.display = "block"
  exploresvg5.style.display = "none"
})