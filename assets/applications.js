// 📌 Apply for an Opportunity & Save to LocalStorage
function applyForOpportunity(opportunityName) {
    let appliedList = JSON.parse(localStorage.getItem("appliedOpportunities")) || [];

    if (!appliedList.includes(opportunityName)) {
        appliedList.push(opportunityName);
        localStorage.setItem("appliedOpportunities", JSON.stringify(appliedList));
        
        // ✅ Update UI instantly
        loadApplications();

        alert("You have successfully applied for " + opportunityName + "!");
    } else {
        alert("You have already applied for this opportunity.");
    }
}

// 📋 Load Applied Opportunities in Dashboard
function loadApplications() {
    let appliedList = JSON.parse(localStorage.getItem("appliedOpportunities")) || [];
    let applicationList = document.getElementById("applicationList");

    if (!applicationList) return; // Prevents errors if the element doesn't exist

    // 🛑 Handle Empty Applications
    if (appliedList.length === 0) {
        applicationList.innerHTML = "<p>No applications yet. Apply for an opportunity!</p>";
        return;
    }

    applicationList.innerHTML = ""; // Clear previous list before loading new items

    appliedList.forEach((opportunity, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${opportunity} 
            <button onclick="removeApplication(${index})" class="remove-btn">❌</button>`;
        applicationList.appendChild(li);
    });
}

// ❌ Remove a Specific Application
function removeApplication(index) {
    let appliedList = JSON.parse(localStorage.getItem("appliedOpportunities")) || [];
    
    appliedList.splice(index, 1); // Remove the selected item
    localStorage.setItem("appliedOpportunities", JSON.stringify(appliedList));

    loadApplications(); // Refresh the list
}

// 🗑 Clear All Applications
function clearApplications() {
    localStorage.removeItem("appliedOpportunities");
    alert("All applications have been cleared.");
    loadApplications(); // Refresh UI
}

// 🚀 Load Applications on Page Load
window.onload = loadApplications;
