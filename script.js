/* =======================================
   VAZGEN MOVSIYAN PORTFOLIO
   script.js
======================================= */

/* ===========================
LOADER
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.display = "none";

    }, 3500);

});


/* ===========================
SCROLL ANIMATION
=========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.2

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


/* ===========================
PARALLAX HERO
=========================== */

const heroVideo = document.querySelector(".hero video");

window.addEventListener("scroll",()=>{

    let scroll = window.pageYOffset;

    heroVideo.style.transform = `translateY(${scroll*0.3}px) scale(1.1)`;

});


/* ===========================
PHOTO LIGHTBOX
=========================== */

const images=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

images.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

const img=document.createElement("img");

img.src=image.src;

while(lightbox.firstChild){

lightbox.removeChild(lightbox.firstChild);

}

lightbox.appendChild(img);

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});


/* ===========================
SCROLL TO TOP BUTTON
=========================== */

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("showTop");

}else{

topButton.classList.remove("showTop");

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* ===========================
PROJECT HOVER EFFECT
=========================== */

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,#2b2b2b,#141414)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#141414";

});

});




/* ===========================
TEXT REVEAL
=========================== */

const titles=document.querySelectorAll("h2,h3");

titles.forEach(title=>{

observer.observe(title);

});


console.log("Portfolio Loaded Successfully");

