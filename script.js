// =========================================================
// ANAAN FATHIMA PORTFOLIO
// JAVASCRIPT
// =========================================================


// =========================================================
// CURRENT YEAR
// =========================================================

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



// =========================================================
// MOBILE MENU
// =========================================================

const menuButton =
    document.querySelector(".menu");


const links =
    document.querySelector(".links");


if (menuButton && links) {

    menuButton.addEventListener(
        "click",
        function () {

            links.classList.toggle("show");

        }
    );

}



// =========================================================
// CLOSE MOBILE MENU
// =========================================================

document
    .querySelectorAll(".links a")
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    links.classList.remove(
                        "show"
                    );

                }
            );

        }
    );



// =========================================================
// SMOOTH SCROLLING
// =========================================================

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({

                            behavior:
                                "smooth",

                            block:
                                "start"

                        });

                    }

                }
            );

        }
    );



// =========================================================
// NAVIGATION SHADOW
// =========================================================

window.addEventListener(
    "scroll",
    function () {

        const nav =
            document.querySelector("nav");


        if (!nav) {
            return;
        }


        if (window.scrollY > 30) {

            nav.style.boxShadow =
                "0 10px 35px rgba(0,0,0,0.35)";

        }

        else {

            nav.style.boxShadow =
                "none";

        }

    }
);



// =========================================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// =========================================================

document.addEventListener(
    "click",
    function (event) {

        if (!links || !menuButton) {
            return;
        }


        if (
            !links.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            links.classList.remove(
                "show"
            );

        }

    }
);



// =========================================================
// MY INTERESTS ANIMATION
// =========================================================

const interests = [

    "Artificial Intelligence",

    "SQL",

    "Data Science"

];


const interestText =
    document.getElementById(
        "interestText"
    );


let interestIndex = 0;



function changeInterest() {

    if (!interestText) {
        return;
    }


    interestText.style.opacity =
        "0";


    interestText.style.transform =
        "translateY(8px)";


    setTimeout(
        function () {

            interestIndex =
                (
                    interestIndex + 1
                ) %
                interests.length;


            interestText.textContent =
                interests[
                    interestIndex
                ];


            interestText.style.opacity =
                "1";


            interestText.style.transform =
                "translateY(0)";

        },
        450
    );

}



setInterval(
    changeInterest,
    3000
);



// =========================================================
// END
// =========================================================
