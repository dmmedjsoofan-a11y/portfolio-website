// Theme toggle
const btn = document.getElementById("toggleTheme");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
});
