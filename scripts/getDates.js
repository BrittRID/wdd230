const options = {year:'numeric'};
document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', options);

let oLastModif = new Date(document.lastModified);
document.getElementById('lastModified').textContent = oLastModif;


function calculateDays() {
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    // Calculate the difference in milliseconds
    var diffInMs = Math.abs(endDate - startDate);

    // Convert milliseconds to days
    var diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    document.getElementById('results').innerHTML = "Days between the dates: " + diffInDays;}