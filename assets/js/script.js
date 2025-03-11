// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

// Apply dark mode preference if previously selected
window.onload = () => {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
};

// Search Functionality for Opportunities
document.getElementById("searchInput").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    document.querySelectorAll(".opportunity-card").forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(filter) ? "block" : "none";
    });
});

// Testimonials Slider
let testimonials = [
    `"Volunteering changed my life!" - Alex`,
    `"I met great people while helping others!" - Sam`,
    `"A wonderful platform for making a difference." - Mia`
];

let index = 0;
function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    document.getElementById("testimonialText").innerText = testimonials[index];
}
