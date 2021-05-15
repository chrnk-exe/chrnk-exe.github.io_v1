/* ===============================
	scroll-top
   =============================== */

let upButton = document.createElement('div')

let upButtonImg = new Image();
upButtonImg.src = "img/upButton.svg";

//стили кнопки 
upButton.style.height = 50 + 'px';
upButton.style.width = 50 + 'px';
upButton.addEventListener("click", function(){
	window.scrollTo(pageXOffset, 0);
})
upButtonImg.style.cursor = 'pointer';
upButtonImg.style.borderRadius = 10 + 'px';
upButton.style.bottom = 30 + 'px';
upButton.style.right = 30 + 'px';
upButton.style.position = 'fixed';
upButton.style.display = 'none';

upButton.append(upButtonImg);

let body = document.querySelector("body");
body.append(upButton);

window.addEventListener("scroll", function() {
	if (window.pageYOffset > 80) {
		upButton.style.display = 'block';
	} else {
		upButton.style.display = 'none';
	}
})
/* ===============================
	header hiding
   =============================== */

   let header = document.querySelector("header");
   let scrollNow = 0;
   window.addEventListener("scroll", function(){
     let scrolled = window.pageYOffset;
    if(scrolled > 100 && scrolled > scrollNow){
      header.classList.add('out');
    } else {
      header.classList.remove('out');
    }
    scrollNow = scrolled;
   });

/* ===============================
	particle configuration
   =============================== */

let particlesSettings = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      }, //какие частицы
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      }, //размер
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      }, //движение
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    }, //можно вообще не трогать, всё равно z-index: -1, хотя в дальнейшем мб и понадобиться 
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
	particlesJS('particles-js', particlesSettings);

/* ===============================
	scrollReveal configuration
   =============================== */

   ScrollReveal().reveal('.cards .card:nth-child(1)', { distance: '120%', origin: 'bottom', opacity: 0, delay: 150});
   ScrollReveal().reveal('.cards .card:nth-child(2)', {	distance: '120%', origin: 'bottom', opacity: 0, delay: 300});
   ScrollReveal().reveal('.cards .card:nth-child(3)', { distance: '120%', origin: 'bottom', opacity: 0, delay: 450});
   ScrollReveal().reveal('.team .card', {delay: 100});
   ScrollReveal().reveal('.footer-logo', {delay: 100});
   ScrollReveal().reveal('.contacts h2', {distance: '150%', origin: 'left', opacity:0, delay: 150})

/* ===============================
	анимация с попкорнмэном
   =============================== */
let gameWindow = document.querySelector(".game-animation");

let poopMan = document.createElement("div");
let poopManImg = new Image();
poopManImg.src = "temp/gif/Popcornmen2nobg.png";
poopMan.append(poopManImg);

let poopFloor = document.createElement("div");
let poopFloorImg = new Image();
poopFloorImg.src = "temp/gif/popfloorshadow.png";
poopFloor.append(poopFloorImg);

gameWindow.append(poopMan);
gameWindow.append(poopFloor);

anime({
  targets: poopMan,
  direction: 'alternate',
  translateY: 30,
  easing: 'easeInOutSine',
  loop: true
})

/* ===============================
	Анимация слева
   =============================== */
   let K = new Image();
   K.src = "img/lettersNobg/k.png";
   let A = new Image();
   A.src = "img/lettersNobg/a.png";
   let M = new Image();
   M.src = "img/lettersNobg/m.png";
   let E = new Image();
   E.src = "img/lettersNobg/e.png";
   let N = new Image();
   N.src = "img/lettersNobg/n.png";
   let KAMEN = new Image();
   KAMEN.src = "img/lettersNobg/kamen.png"
   let KAMENdiv = document.createElement("div");
   KAMENdiv.append(KAMEN);
   
   //KAMENdiv.style.display = "none";
   KAMEN.style.height = 300 + 'px';
   KAMEN.classList.add("kamen1");
   let animWindow = document.querySelector(".f-left");
   animWindow.style.display = "flex";
   let letters = {
     0: K,
     1: A,
     2: M,
     3: E,
     4: N
   }
   
   let divs = []
   for(let i = 0; i < 5; i++){
     divs.push(document.createElement("div"));
     letters[i].style.height = 62 + 'px';
     divs[i].append(letters[i])
     animWindow.append(divs[i]);
   }
   animWindow.append(KAMENdiv);
   let tl = anime.timeline();
   tl.add({
    targets: divs,
    opacity: 1,
    translateY: 400,
    translateX: 175,
    rotate: {
      value: '1turn',
      duration: 2000,
      easing: 'easeInExpo'
    },  
    delay: anime.stagger(100, {start: 500})
   });
   tl.add({
    targets: KAMENdiv,
    translateY: 85,
    translateX: -65
   })
   tl.add({
    targets: KAMEN,
    rotate: "30turn",
    easing: 'linear',
    duration: 100000,
    loop: true
   })
   ScrollReveal().reveal(".kamen1", {delay: 3400});

   /* права анимация гениальная */
   let face = document.querySelector(".face");

   let phoneFront = new Image();
   phoneFront.src = "temp/genius/poopphone-front.png";
   phoneFront.style.height = 570 + 'px'; 
   phoneFront.style.position = "absolute"; 
   phoneFront.style.left = face.offsetWidth / 2 + 30 + 'px'; 
   phoneFront.style.top = 80 + 'px';
   console.log(face.offsetWidth)

   let phoneBack = new Image();
   phoneBack.src = "temp/genius/poopphone-back.png";
   phoneBack.style.height = 570 + 'px'; 
   phoneBack.style.position = "absolute";
   phoneBack.style.left = face.offsetWidth / 2 + 30 + 'px';
   phoneBack.style.top = 80 + 'px';
   
   face.append(phoneBack);
   face.append(phoneFront);

   ScrollReveal().reveal(phoneBack, {distance: '40px', origin: 'top', delay: 2000});
   ScrollReveal().reveal(phoneFront, {distance: '40px', origin: 'top', delay: 2500})

   /* ===============================
	splide достижения
   =============================== */
   document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('#splider', {
      type: 'loop',
      gap: 45,  
      perPage: 4,
      perMove: 1,
      
      autoplay: true,
      width: '100%',
      'cover'      : true,
		  'heightRatio': 0.5,
    }).mount();
  } );