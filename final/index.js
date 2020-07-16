// enrty animation
let tlentry = gsap.timeline()
    .from("body", 1, { opacity: 0, ease: "back" }, "-=0.5")
    .to("nav", 1, { y: 0, opacity: 1 }, "-=0.4")
    .from("#phone1", 1, { opacity: 0, x: -50 }, "-=0.5")
    .from(".textsliderh", 1, { opacity: 0, x: 30 }, "-=0.5")
    .to(".icon", 1, { display: "block", opacity: 1 }, "-=0.5");




gsap.timeline()
    .from(".wv", 1, { opacity: 0, y: 10 })
    .from(".vt", 1, { y: 0, opacity: 0 })
    .from(".vp", 1, { scale: 0, opacity: 0 });



let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let controller = new ScrollMagic.Controller();

let tlnav = gsap.timeline()
    .to(".nav-link", 0.01, { color: "white" })
    .to(".line", 0.01, { background: "white" })
    .to("nav", 0.01, { background: "rgba(63,81,181,0.9)" }, "-=0.01")
    .to(".ftlbtn", 0.01, { color: "white" }, "-0.01");


let navscene = new ScrollMagic.Scene({
        offset: 1,
        triggerHook: 0,
    })
    .setTween(tlnav)
    .addTo(controller);





document.querySelectorAll(".navitem").forEach((x, i) => {
    x.addEventListener("mouseover", () => {
        gsap.to(x.children[0], { background: "rgba(10,10,10,0)", duration: 0.4 })
        gsap.to(x.children[0].children[0], { scale: 1, opacity: 1, duration: 0.4 })
    })
    x.addEventListener("mouseout", () => {
        gsap.to(x.children[0].children[0], { scale: 0, opacity: 0, duration: 0.4 })
    })
})
document.querySelectorAll(".navicons").forEach((x) => {
    x.addEventListener("mouseenter", () => {
        gsap.timeline()
            .set(x.children[0].children[0], { scale: 0 })
            .to(x.children[0].children[0], { scale: 1 })
    })
})
document.querySelector(".navbar-toggler").addEventListener("click", () => {
    console.log(document.querySelector("nav").style.backgroundColor);
    if (document.querySelector("nav").style.background == "" || document.querySelector("nav").style.backgroundColor == "rgba(10, 10, 10, 0)") {
        document.querySelector("nav").style.background = "rgba(63,81,181,0.9)";
        document.querySelector(".ftlbtn").style.color = "white";
        document.querySelectorAll(".nav-link").forEach((x) => {
            x.style.color = "white";
        })
        document.querySelectorAll(".line").forEach((x) => {
            x.style.background = "white";
        })
    }
})
window.addEventListener("scroll", function(event) {
    if (this.scrollY == 0) {
        $('.navbar-collapse').collapse('hide');
        console.log("hhi");
    }
});
gsap.timeline({ repeat: -1, repeatDelay: 0.1 })
    .from(".icon", 0.2, { opacity: 0, y: -10, stagger: 0.1, ease: "back" })
    .to(".icon", 0.4, { opacity: 0, stagger: 0.1 })


$('#play').on('click', function(e) {
    e.preventDefault();
    $("#player")[0].src += "?autoplay=1";
    $('#player').show();
    $('#video-cover').hide();
})
$('#modal1').on('hidden.bs.modal', function(e) {
    $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});




document.querySelector(".social1").addEventListener("mouseover", () => {
    gsap.to(document.querySelector(".social1"), 0.5, { background: "rgb(113, 131, 196)", ease: "back" })

})
document.querySelector(".social1").addEventListener("mouseout", () => {
    gsap.to(document.querySelector(".social1"), 0.5, { background: "rgba(113, 131, 196,0)" })
})
document.querySelector(".social2").addEventListener("mouseover", () => {
    gsap.to(document.querySelector(".social2"), 0.5, { background: "rgb(163, 153, 112)", ease: "back" })

})
document.querySelector(".social2").addEventListener("mouseout", () => {
    gsap.to(document.querySelector(".social2"), 0.5, { background: "rgba(113, 131, 196,0)" })
})
document.querySelector(".social3").addEventListener("mouseover", () => {
    gsap.to(document.querySelector(".social3"), 0.5, { background: "rgb(244, 68, 56)", ease: "back" })

})
document.querySelector(".social3").addEventListener("mouseout", () => {
    gsap.to(document.querySelector(".social3"), 0.5, { background: "rgba(113, 131, 196,0)" })
})



// let tl1=gsap.timeline()
// .from(".wv",1,{opacity:0,y:10})
// .from(".vt",1,{opacity:0,y:10})
// .from(".vp",1,{opacity:0,scale:0});


// let scene1=new ScrollMagic.Scene({
//   triggerElement="#section2",
// })
// .addIndicators()
// .addTo(controller);
let line1 = document.querySelector(".textsliderh1");
let txts = ['YOUR SAFETY IN YOUR HANDS '];
let txts1 = ['DOMESTIC VIOLENCE', 'KIDNAP', 'HARRASEMENT', 'ACCIDENT', 'ROBBERY'];
let speed = 80;

async function typewriter(txt) {
    for (let i = 0; i < txt.length; i++) {
        line1.innerHTML += txt.charAt(i);
        await delay(speed)
    }
}

async function reverseTypewriter(txt) {
    for (let i = txt.length; i > 0; i--) {
        line1.innerHTML = line1.innerHTML.slice(0, -1)
        await delay(speed)
    }
}

async function writeLoop() {
    for (let i = 0; i < txts1.length; i++) {
        await typewriter(txts1[i])
        await delay(3000)
        await reverseTypewriter(txts1[i])
        await delay(1000)
    }
    writeLoop()
}


function delay(ms) {
    return new Promise((resolve) => { setTimeout(() => { resolve() }, ms) })
}

writeLoop()


$(".click").click(() => {
    $('html,body').animate({ scrollTop: $('#sectionshf1').offset().top - 50 }, 1000);
})