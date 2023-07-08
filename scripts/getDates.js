const options = {year:'numeric'};
document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', options);

let oLastModif = new Date(document.lastModified);
document.getElementById('lastModified').textContent = oLastModif;