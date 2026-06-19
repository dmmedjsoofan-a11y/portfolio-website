// Theme toggle
const btn = document.getElementById("toggleTheme");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
});

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            reveals[i].classList.add("active");
        }
    }
});
