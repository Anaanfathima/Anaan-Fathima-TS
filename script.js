const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

menuBtn.onclick = () => {
    nav.classList.toggle("active");
};

// Contact Form

document.querySelector("form").addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been sent.");

this.reset();

});

// Scroll Animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

let top=window.scrollY;

let offset=sec.offsetTop-300;

if(top>offset){

sec.style.opacity="1";
sec.style.transform="translateY(0px)";

}

});

});

sections.forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(50px)";

sec.style.transition="1s";

});
