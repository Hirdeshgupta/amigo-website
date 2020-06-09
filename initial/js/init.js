
(function($){
  $(function(){
    $('.sidenav').sidenav();
  }); // end of document ready
})(jQuery); // end of jQuery name space

// document.getElementById("myVideo").pause();

let texttl=gsap.timeline({
  onReverseComplete:reverseRepeat,
  onReverseCompleteParams:['{self}'],
  onComplete:complete,
  onCompleteParams:['{self}']
});
function reverseRepeat(tl) {
  texttl.reverse(0); // 0 sets the playhead at the end of the animation
}


function complete(tl) {
  texttl.restart(); // 0 sets the playhead at the end of the animation
}

let textslidearr = document.querySelectorAll(".textslide");
textslidearr.forEach((x)=>{
texttl.from(x,0.3,{x:-20,opacity:0,display:"block"},"+=2")
.to(x,0.3,{x:20,opacity:0,display:"none",ease:"back"},"+=5");
})
document.querySelector(".controllerbtnp").addEventListener("click",()=>{
  texttl.play( gsap.utils.wrap(0, texttl.duration(), texttl.time() + 7) );

})
document.querySelector(".controllerbtn").addEventListener("click",()=>{
  let time= texttl.time();
  texttl.reverse(gsap.utils.wrap(0, texttl.duration(), texttl.time() - 7) );
  texttl.reversed(true);
  if(texttl.reversed()){
    texttl.pause(time-9);
    texttl.play();
  }
})









let texttl1=gsap.timeline({
  onReverseComplete:reverseRepeat1,
  onReverseCompleteParams:['{self}'],
  onComplete:complete1,
  onCompleteParams:['{self}']
});
function reverseRepeat1(tl) {
  texttl1.reverse(0); // 0 sets the playhead at the end of the animation
}


function complete1(tl) {
  texttl1.restart(); // 0 sets the playhead at the end of the animation
}
let textslidearr1 = document.querySelectorAll(".textslide1");
textslidearr1.forEach((x)=>{
texttl1.from(x,0.3,{x:35,opacity:0,display:"block"},"+=1")
.to(x,0.3,{x:-30,opacity:0,display:"none",ease:"back"},"+=8");
})
document.querySelector(".controllerbtn1").addEventListener("click",()=>{
  texttl1.play(gsap.utils.wrap(0, texttl.duration(), texttl.time() + 7) );

})
document.querySelector(".controllerbtnp1").addEventListener("click",()=>{
  texttl1.reverse(gsap.utils.wrap(0, texttl.duration(), texttl.time() - 7));

})

// ---------enrty enimation------------------
let tlentry=gsap.timeline()
.from("body",1,{opacity:0})
.from("nav",1,{opacity:0,y:-100},"-=1")
.from("#phone",1,{opacity:0,x:-50},"-=0.5")
.from(".textsliderh",1,{opacity:0,x:30},"-=0.5")
.from(".textinfo",1,{opacity:0,x:30},"-=0.5")
.from(".controllerbtn",1,{opacity:0,x:30},"-=1")
.from(".controllerbtnp",1,{opacity:0,x:30},"-=1")
.to(".icon",1,{display:"none"},"-=3")
.to(".icon",1,{display:"block",opacity:1});









// ------------------------------------------

// -----------effect of navtabs -------------
document.querySelectorAll(".navtabs").forEach((x,i)=>{
  x.addEventListener("mouseover",()=>{
    gsap.to(x.children[0],{background:"rgba(10,10,10,0)",duration:0.3})
    gsap.to(x.children[0].children[0],{scale:1,opacity:1,duration:0.3})
    })
    x.addEventListener("mouseout",()=>{
      gsap.to(x.children[0].children[0],{scale:0,opacity:0,duration:0.3})
      })
})
// ----------------------------------------------------------
// ------------typewritting effect--------------------
let line = document.querySelector(".textsliderh");
let line1=document.getElementById("heading1");
let txts = ['YOUR SAFETY IN YOUR HANDS '];
let speed = 100

async function typewriter(txt) {
  for(let i = 0; i < txt.length; i++){
    line.innerHTML += txt.charAt(i);
    await delay(speed) 
  }
}

async function reverseTypewriter(txt) {
  for(let i = txt.length; i > 0; i--){
    line.innerHTML = line.innerHTML.slice(0,-1)
    await delay(speed)
  }
}

async function writeLoop(){
  for(let i = 0; i < txts.length; i++){
    await typewriter(txts[i])
    await delay(3000)
    await reverseTypewriter(txts[i])
    await delay(1000)
  }
  
  writeLoop()
}

function delay(ms){
  return new Promise((resolve)=>{setTimeout(()=>{resolve()},ms)})
}

writeLoop()

// ---------------------------------------------------------

// --------typerwriter after  effect----------
let rule=CSSRulePlugin.getRule(".textsliderh:after");
gsap.timeline({repeat:-1,repeatDelay:0.1})
  .from(rule,{cssRule:{opacity:0}});


  // ------------------------------------------------------


  // ------------effect of scrolling indicator effect -----------

gsap.timeline({repeat:-1,repeatDelay:0.1})
  .from(".icon",0.2,{opacity:0,y:-10,stagger:0.1,ease:"back"})
  .to(".icon",0.4,{opacity:0,stagger:0.1})

// ----------------------------------------------------------------

let controller= new ScrollMagic.Controller();
// -------------scrolling navbar effect ------------------
  let tlnav=gsap.timeline()
    .to("nav",0.8,{opacity:0,y:-100});
    
let navscene=new ScrollMagic.Scene({
    offset:10,
    triggerHook:0,
  })
  .setPin("#nav")
  .setTween(tlnav)
  .addTo(controller);
// -------------------------------------------------------
// ----------smooth scrolling effects --------
$(".click").click(()=>{
  $('html,body').animate({scrollTop: $('#secondsection').offset().top-530}, 5000);
  })
  $("#hometab").click(()=>{
    $("html,body").animate({scrollTo:$("#home").offset().top},5000)
  });
  $(".click1").click(()=>{
    $('html,body').animate({scrollTop: $('#secondsection').offset().top+270}, 500,()=>{
      gsap.to("nav",1,{opacity:0,y:-100},"-=1")
    });
    })
  // ---------------------------------------------
// ----------home slide animation---------------
if(window.innerWidth>=500){
let imgnew=document.querySelector("#phone");
let tlhome=gsap.timeline()
.set(".para",{width:"100%"})
.set("#phone",{top:"10%"})
.set("#section12",{opacity:1})
.to("#section1",5,{width:"100%"})
.set(".icon",{display:"none",opacity:0})
.to("#section12",5,{width:"0%",opacity:0},"-=5")
.to(".textinfo",3,{x:350,opacity:0},"-=5")
.to(".textsliderh",1,{opacity:0,x:30},"-=5")
.to(".controllerbtn",3,{x:450,opacity:0},"-=5")
.to(".controllerbtnp",3,{x:450,opacity:0},"-=5")
.to("#phone",5,{top:"5%",x:350},"-=5")
.set("#phone",{width:"30%",left:"10%"})
.set(".para",{paddingLeft:"10px"})
.to(".icon",1,{width:"0%",opacity:0},"-=5")
.to(imgnew,4,{x:-200,ease:"back",opacity:0},"+=3")
.to(imgnew,1,{attr:{src:"pic1.jpg"}},"-=1")
.set(imgnew,{x:window.innerWidth})
.to(imgnew,4,{x:350,opacity:1})
.to("#section1",3,{backgroundImage:"linear-gradient(315deg,#7b85c2 0%, #f5f5ff 74%)"},"-=2.5")
.set(".icon",{display:"none"})
.set(".textinfo1",{opacity:0})
.set(".textsliderh1",{opacity:0})
.set(".controllerbtn1",{opacity:0})
.set(".controllerbtnp1",{opacity:0})
.to("#section13",{opacity:1},"+=5")
.to("#section13",10,{width:"50%"})
.to("#section1",10,{x:100},"-=10")
.to("#phone",10,{x:550,top:"5%"},"-=10")
.to(".textsliderh1",2,{opacity:1,x:-30})
.from(".textinfo1",2,{opacity:0,x:30},"-=1")
.from(".controllerbtn1",2,{opacity:0,x:30},"-=2")
.from(".controllerbtnp1",2,{opacity:0,x:30},"-=2")
.to(".icon",1,{display:"none"},"-=3")
.to(".icon",1,{display:"block",opacity:1});



let homescene=new ScrollMagic.Scene({
triggerElement:"#pin",
triggerHook:0,
duration:1000
})
.setPin("#pin")
.setTween(tlhome)
.addTo(controller);}
// --------------------------------------------------------------------------
// -----------nav reappers----------------------------
let tlnav1=gsap.timeline()
    .to("nav",0.1,{background:"rgba(63,81,181,0.9)"})
    .to(".navtabsa",0.1,{color:"white"},"-=0.1")
    .to(".line",0.1,{background:"white",top:"-2px"},"-=0.1")
    .to("nav",{opacity:1,y:1});
    
let navscene1=new ScrollMagic.Scene({
    triggerElement:"#secondsection",
    triggerHook:1,
  })
  .setTween(tlnav1)
  .addTo(controller);
  // ----------------------------------------------
  // let num=0;
  // document.querySelector("body").addEventListener("click",()=>{
  //   if(num%2==0){
  //  gsap.to("nav",1,{opacity:0,y:-100},"-=1");
  //  num++;}
  //  else{
  //  gsap.to("nav",1,{opacity:1,y:0},"-=1");
  //  num++;
  //  }

  // })



let tlappph=gsap.timeline({
    onReverseComplete:reverseRepeatapp,
    onReverseCompleteParams:['{self}'],
    onComplete:completeapp,
    onCompleteParams:['{self}']
  });
  function reverseRepeatapp() {
    tlappph.reverse(0); // 0 sets the playhead at the end of the animation
  }
  
  
  function completeapp() {
    tlappph.restart(); // 0 sets the playhead at the end of the animation
  }
document.querySelectorAll(".appphone").forEach((x)=>{
  tlappph
  .from(x,0.5,{x:-400,opacity:0,display:"block"},"-=0.3")
  .to(x,0.5,{x:400,display:"none",opacity:0,ease:"back"},"+=5")
})
document.querySelector("#left").addEventListener("click",()=>{
  let time= tlappph.time();
  tlappph.reverse(gsap.utils.wrap(0, tlappph.duration(), tlappph.time() - 5) );
  tlappph.reversed(true);
  if(tlappph.reversed()){
    tlappph.pause(time-5);
    tlappph.play();
  }
})
document.querySelector("#right").addEventListener("click",()=>{
  tlappph.play( gsap.utils.wrap(0, tlappph.duration(), tlappph.time() + 5) );
})










  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  document.querySelector(".social1").addEventListener("mouseover",()=>{
    gsap.to(document.querySelector(".social1"),0.5,{background:"rgb(113, 131, 196)",ease:"back"})

  })
  document.querySelector(".social1").addEventListener("mouseout",()=>{
    gsap.to(document.querySelector(".social1"),0.5,{background:"rgba(113, 131, 196,0)"})
  })
  document.querySelector(".social2").addEventListener("mouseover",()=>{
    gsap.to(document.querySelector(".social2"),0.5,{background:"rgb(163, 153, 112)",ease:"back"})

  })
  document.querySelector(".social2").addEventListener("mouseout",()=>{
    gsap.to(document.querySelector(".social2"),0.5,{background:"rgba(113, 131, 196,0)"})
  })
  document.querySelector(".social3").addEventListener("mouseover",()=>{
    gsap.to(document.querySelector(".social3"),0.5,{background:"rgb(244, 68, 56)",ease:"back"})

  })
  document.querySelector(".social3").addEventListener("mouseout",()=>{
    gsap.to(document.querySelector(".social3"),0.5,{background:"rgba(113, 131, 196,0)"})
  })





























