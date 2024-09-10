const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



var tl = gsap.timeline({scrollTrigger:{
       trigger: '#hero',
       start: '50% 50%',
       end: '230% 50%',
       // markers: true,
       scrub: 1,
       pin: true,
}})
tl.to ("#rotate-elem",{
       rotate:-14,
       scale:0.7,
},'a')

.to (".row2",{
       marginTop:"-3%"
},'a')

.to (".row3",{
       marginTop:"-5%"
},'a')

.to (".row4",{
       marginTop:"2%"
},'a')

.to (".row5",{
       marginTop:"-6%"
},'a')

.to ("#overlay h1",{
       opacity:"1",
       delay:0.2,
},'a')

.to ("#overlay",{
       backgroundColor:"#0000008f"
},'a')

.to ("#scrolling",{
       width:"100px",
},'a')


var tl2 = gsap.timeline({scrollTrigger:{
       trigger: '#part2',
       start: '0% 70%',
       end: '50% 50%',
       // markers: true,
       scrub: 1,
       // pin: true,
}})

tl2.to ("#rounded-wrapper",{
       height:0,
       marginTop:0,
})


let tl3 = gsap.timeline({
       scrollTrigger:{
              trigger:"#content-2",
              start: "20% 50%",
              end: "100% 50%",
              // markers: true,
              scrub: 1,
              // pin: true,
       }
})
tl3.to ("#text-elem-hover h1",{
       width:"100%",
})
tl3.to ("#text-elem-hover h2",{
      
       width:"100%",
})


let tl4 = gsap.timeline({
       scrollTrigger:{
              trigger:"#part4",
              start: "50% 50%",
              end: "200% 50%",
              // markers: true,
              scrub: 1,
              pin: true,
       }
})

tl4.to("#left1",{
       marginTop: "-25%",
       opacity:"1",
   }, 'sct-1')
   tl4.to("#left2",{
       opacity:"1",
   }, 'sct-2')
   tl4.to("#left1",{
       marginTop: "-100",
       opacity:"0",
   }, 'sct-2')

   tl4.to("#left3",{
       opacity:"1",
   }, 'sct-3')
   tl4.to("#left2",{
       opacity:"0",
   }, 'sct-3')
   tl4.to("#left1",{
       marginTop:"-180%",
   }, 'sct-3')
   tl4.to("#left1",{
       marginTop:"-230%",
   }, 'sct-4')
   tl4.to("#left3",{
       opacity:"0",
   }, 'sct-4')
tl4.to (".circle-part4",{
       marginLeft:"87%",
       rotate:360
})



let tl5 = gsap.timeline({
       scrollTrigger:{
              trigger:"#part5",
              start: "20% 50%",
              end: "100% 50%",
              // markers: true,
              scrub: 1,
              // pin: true,
       }
})
tl5.to ("#text-elem-hover2 h1",{
       width:"100%",
})
tl5.to ("#text-elem-hover2 h2",{
      
       width:"100%",
})


let tl6 = gsap.timeline({
       scrollTrigger:{
              trigger:"#part6",
              start: "0% 60%",
              end: "50% 50%",
              // markers: true,
              scrub: 1,
              // pin: true,
       }
})
tl6.to ("#rounded-wrapper2",{
       // width:"100%",
       height:"0%",
       marginTop:0,
})



let tl7 = gsap.timeline({
       scrollTrigger:{
              trigger:"#part6",
              start: "20% 50%",
              end: "100% 50%",
              // markers: true,
              scrub: 1,
              // pin: true,
       }
})
tl7.to ("#text-elem-hover3 h1",{
       width:"100%",
})
tl7.to ("#text-elem-hover3 h2",{
       width:"100%",
})


let tl8 = gsap.timeline({
       scrollTrigger:{
              trigger:"#part8",
              start: "50% 50%",
              end: "300% 50%",
              // markers: true,
              scrub: 1,
              pin: true,
       }
})

tl8.to ("#btn3",{
       bottom:"7%",
})
tl8.to ("#ourwork-txt-div",{
       height:"60vh",
},'ani')

tl8.to ("#ourwork-txt",{
       height:"60vh",
},'ani')

tl8.to ("#our",{
       left:"0",
},'ani')
tl8.to ("#work",{
       right:"0",
},'ani')


tl8.to ("#scroll-img",{
      marginTop:"-410%",
})