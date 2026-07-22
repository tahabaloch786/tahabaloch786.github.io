const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
if(document.querySelector(".typing")){
new Typed(".typing", {
 strings:[
    "Web Developer",
    "WordPress Specialist",
    "SEO Expert",
    "Frontend Developer"
 ],
 typeSpeed:70,
 backSpeed:50,
 backDelay:1500,
 loop:true
});
}
// Hamburger Menu

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}
// Close menu after clicking a nav link

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});
// Scroll Progress Bar

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});
// Cursor Glow

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});
// Navbar Scroll Effect

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});
// Loader

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("hide");
    },1000);

});
// Animated Counter

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                const increment = target / 100;

                if(count < target){

                    count += increment;
                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target;

                }

            };

            update();
            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => counterObserver.observe(counter));
// Back To Top Button

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        backToTop.classList.add("show");
    }else{
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
// new Typed(".typing", {
//     strings: [
//         "Frontend Developer",
//         "WordPress Designer",
//         "SEO Specialist",
//         "UI/UX Enthusiast"
//     ],
//     typeSpeed: 70,
//     backSpeed: 50,
//     backDelay: 1500,
//     loop: true
// });