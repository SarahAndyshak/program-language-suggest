//Business logic, I think
function hideResultsAndError() {
  document.getElementById("JavaScript").setAttribute("class", "hidden");
  document.getElementById("Python").setAttribute("class", "hidden");
  document.getElementById("Ruby").setAttribute("class", "hidden");
  document.getElementById("coffee").value = null; // moved up
  document.getElementById("reptiles").value = null;
  document.getElementById("geology").value = null;
  document.getElementById("forms").value = null;
  document.getElementById("computers").value = null;
}

//updated code using sample from lesson on forms
function handleSelect(event) {
  event.preventDefault();
  const selection1 = parseInt(document.getElementById("coffee").value);
  const selection2 = parseInt(document.getElementById("reptiles").value);
  const selection3 = parseInt(document.getElementById("geology").value);
  //const selection4 = document.getElementById("forms");//added in for reset button function
  //const selection5 = document.getElementById("computers");

  if (selection1 && selection2 && selection3) {
    if (selection1 === selection2 && selection2 == selection3) {
      document.getElementById("JavaScript").removeAttribute("class");
    } else if (selection1 === selection2 && selection2 !== selection3 || selection2 === selection3 && selection1 !== selection3 || selection1 === selection3 && selection1 !== selection2) {
      document.getElementById("Python").removeAttribute("class");
    } else if (selection1 !== selection2 && selection1 !== selection3) {
      document.getElementById("Ruby").removeAttribute("class");
    } 
    } else {
      document.getElementById("error-message").removeAttribute("class");
    }
}

window.addEventListener("load", function() {
  const form = document.getElementById("answers");
  let resetBtn = document.querySelector("button#reset"); //reset button starts here
  form.addEventListener("submit", handleSelect);
  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");  
  });
  resetBtn.addEventListener("click", function() {
    hideResultsAndError();
  });
});