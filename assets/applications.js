// Function to apply for an opportunity
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

// Function to load applications on dashboard.html
function loadApplications() {
    let appliedList = JSON.parse(localStorage.getItem("appliedOpportunities")) || [];
    let applicationList = document.getElementById("applicationList");

    if (!applicationList) return;  // Avoid errors if element doesn't exist

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

// Function to clear applications
function clearApplications() {
    localStorage.removeItem("appliedOpportunities");
    alert("All applications have been cleared.");
    loadApplications();  // Refresh the list
}

// Load applications on page load
window.onload = loadApplications;
