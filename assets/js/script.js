// 🌙 Dark Mode Toggle
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

// 🔍 Search Functionality for Opportunities
document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            let filter = this.value.toLowerCase();
            document.querySelectorAll(".opportunity-card").forEach(card => {
                card.style.display = card.innerText.toLowerCase().includes(filter) ? "block" : "none";
            });
        });
    }
});

// 📌 User Registration (LocalStorage)
function registerUser(event) {
    event.preventDefault();
    let fullName = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    let user = { fullName, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful! You can now log in.");
    window.location.href = "login.html";
}

// 🔑 User Login (LocalStorage)
function loginUser(event) {
    event.preventDefault();
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
        alert("Invalid credentials. Please try again.");
        return;
    }

    alert("Login successful!");
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
}

// 🚪 Logout Function
function logoutUser() {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully!");
    window.location.href = "index.html";
}

// 📌 Save Applied Opportunities (LocalStorage)
function applyForOpportunity(opportunityName) {
    let appliedList = JSON.parse(localStorage.getItem("appliedOpportunities")) || [];

    if (!appliedList.includes(opportunityName)) {
        appliedList.push(opportunityName);
        localStorage.setItem("appliedOpportunities", JSON.stringify(appliedList));
        alert("You have applied for " + opportunityName);
    } else {
        alert("You have already applied for this opportunity.");
    }
}

// 📋 Load Applied Opportunities on Dashboard
function loadApplications() {
    let appliedList = JSON.parse(localStorage.getItem("appliedOpportunities")) || [];
    let applicationList = document.getElementById("applicationList");

    if (!applicationList) return;

    if (appliedList.length === 0) {
        applicationList.innerHTML = "<p>No applications yet.</p>";
        return;
    }

    applicationList.innerHTML = "";
    appliedList.forEach((opportunity) => {
        let li = document.createElement("li");
        li.innerText = opportunity;
        applicationList.appendChild(li);
    });
}

// 🗑 Clear All Applied Applications
function clearApplications() {
    localStorage.removeItem("appliedOpportunities");
    alert("All applications have been cleared.");
    loadApplications();
}

// 🍔 Toggle Mobile Navigation Menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

// ⏳ Loading Animation
window.onload = function () {
    document.getElementById("loading").style.display = "none";
    loadApplications();
};

// 💬 Testimonials Slider
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
