const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}



// form rating

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}




// Time stamp

 // Function to get the current date and time in ISO format
 function getCurrentTimestamp() {
    return new Date().toISOString();
  }

  // Function to set the hidden field value with the current timestamp
  function setFormLoadedTimestamp() {
    var timestampField = document.getElementById("formLoadedTimestamp");
    timestampField.value = getCurrentTimestamp();
  }

  // Attach the setFormLoadedTimestamp function to the form's onload event
  window.onload = setFormLoadedTimestamp;