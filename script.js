// =========================================
// CURRENT YEAR
// =========================================

document.getElementById("year").textContent =
    new Date().getFullYear();



// =========================================
// MOBILE MENU
// =========================================

const menuButton =
    document.querySelector(".menu");

const links =
    document.querySelector(".links");


menuButton.addEventListener("click", function () {

    links.classList.toggle("show");

});



// =========================================
// CLOSE MENU AFTER CLICKING LINK
// =========================================

document
    .querySelectorAll(".links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            links.classList.remove("show");

        });

    });



// =========================================
// SMOOTH SCROLL
// =========================================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );


            if (target) {

                event.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });



// =========================================
// NAVIGATION SHADOW
// =========================================

window.addEventListener("scroll", function () {

    const nav =
        document.querySelector("nav");


    if (window.scrollY > 30) {

        nav.style.boxShadow =
            "0 8px 30px rgba(122, 23, 56, 0.25)";

    } else {

        nav.style.boxShadow = "none";

    }

});



// =========================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// =========================================

document.addEventListener("click", function (event) {

    if (
        !links.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        links.classList.remove("show");

    }

});



// =========================================
// ANIMATED MY INTERESTS
// =========================================

const interests = [

    "Artificial Intelligence",

    "SQL",

    "Data Science"

];


const interestText =
    document.getElementById("interestText");


let interestIndex = 0;


setInterval(function () {

    interestIndex =
        (interestIndex + 1) %
        interests.length;


    interestText.textContent =
        interests[interestIndex];

}, 3000);
