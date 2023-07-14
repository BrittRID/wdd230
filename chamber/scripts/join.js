window.addEventListener("DOMContentLoaded", function() {
    var timestampField = document.getElementById("timestamp");
    var currentDate = new Date();
  
    // Format the date and time as desired
    var timestampValue = currentDate.toLocaleString();
  
    timestampField.value = timestampValue;
  });
  