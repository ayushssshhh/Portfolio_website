function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./male0001.png
     ./male0002.png
     ./male0003.png
     ./male0004.png
     ./male0005.png
     ./male0006.png
     ./male0007.png
     ./male0008.png
     ./male0009.png
     ./male0010.png
     ./male0011.png
     ./male0012.png
     ./male0013.png
     ./male0014.png
     ./male0015.png
     ./male0016.png
     ./male0017.png
     ./male0018.png
     ./male0019.png
     ./male0020.png
     ./male0021.png
     ./male0022.png
     ./male0023.png
     ./male0024.png
     ./male0025.png
     ./male0026.png
     ./male0027.png
     ./male0028.png
     ./male0029.png
     ./male0030.png
     ./male0031.png
     ./male0032.png
     ./male0033.png
     ./male0034.png
     ./male0035.png
     ./male0036.png
     ./male0037.png
     ./male0038.png
     ./male0039.png
     ./male0040.png
     ./male0041.png
     ./male0042.png
     ./male0043.png
     ./male0044.png
     ./male0045.png
     ./male0046.png
     ./male0047.png
     ./male0048.png
     ./male0049.png
     ./male0050.png
     ./male0051.png
     ./male0052.png
     ./male0053.png
     ./male0054.png
     ./male0055.png
     ./male0056.png
     ./male0057.png
     ./male0058.png
     ./male0059.png
     ./male0060.png
     ./male0061.png
     ./male0062.png
     ./male0063.png
     ./male0064.png
     ./male0065.png
     ./male0066.png
     ./male0067.png
     ./male0068.png
     ./male0069.png
     ./male0070.png
     
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio)/2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});


const {innerHeight} = window;

gsap.to(".swipe", {
  scale: 1.5, stagger: 0.25, duration: 3,
  scrollTrigger: {
      trigger: "#zoom-in",
      pin: true,
      scrub: 3
  }
});

//-----------------------nav menu----------------------------
var menuToggle = document.getElementById("menuToggle");

var menuBar = gsap.timeline();

menuBar.to('.bar-1', 0.5,{
	attr:{d: "M8,2 L2,8"},
	x:1,
	ease: Power2.easeInOut
}, 'start')

menuBar.to('.bar-2', 0.5,{
	autoAlpha: 0
}, 'start')

menuBar.to('.bar-3', 0.5,{
	attr:{d: "M8,8 L2,2"},
	x:1,
	ease: Power2.easeInOut
}, 'start')

menuBar.reverse();


var tl = gsap.timeline({ paused: true});

tl.to('.fullpage-menu', {
	duration:0,
	display: "block",
	ease: 'Expo.easeInOut',
});

tl.from('.menu-bg span', {
	duration:1,
	x:"100%",
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});

tl.from('.main-menu li a', {
	duration:1.5,
	y:"100%",
	stagger: 0.2,
	ease: 'Expo.easeInOut'
} , "-=0.5");

tl.from('.social-links li', {
	duration:1,
	y:"-100%",
	opacity:0,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
} , "-=0.5");

tl.reverse();

menuToggle.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
  
    // $('#page').css("background-color" , "grey");
  
});


// cursor animation
var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0,
    color = document.querySelectorAll(".color");

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});


color.forEach(link => {

  link.addEventListener('mousemove', () => {
    if(link.classList.contains('white')){
      cursor.style.borderColor = "white"
    }
    
    if(link.classList.contains('black')){
      cursor.style.borderColor = "black"
    }
  })
  
})
