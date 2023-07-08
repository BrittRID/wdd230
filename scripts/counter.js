// Retrieve the visitor count from local storage or initialize it to 0
let visitorCount = localStorage.getItem("visitorCount") || 0;

// Increment the visitor count by 1
visitorCount++;

// Update the visitor count on the page
document.getElementById("visitorCount").textContent = visitorCount;

// Store the updated visitor count in local storage
localStorage.setItem("visitorCount", visitorCount);