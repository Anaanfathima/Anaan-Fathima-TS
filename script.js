```javascript
// ===== CURRENT YEAR =====

document.getElementById("year").textContent = new Date().getFullYear();


// ===== MOBILE MENU =====

const menuButton = document.querySelector(".menu");
const links = document.querySelector(".links");

menuButton.addEventListener("click", function () {
    links.classList.toggle("show");
});


// ===== CLOSE MOBILE MENU AFTER CLICKING A LINK =====

document.querySelectorAll(".links a").forEach(function (link) {

    link.addEventListener("click", function () {
        links.classList.remove("show");
    });

});


// ===== SMOOTH SCROLLING =====

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ===== NAVIGATION SHADOW ON SCROLL =====

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 20px rgba(50, 29, 20, 0.12)";
    } else {
        nav.style.boxShadow = "none";
    }

});
```
