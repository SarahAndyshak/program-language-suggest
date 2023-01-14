//Business logic, I think
function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("JavaScript").setAttribute("class", "hidden");
  document.getElementById("Python").setAttribute("class", "hidden");
  document.getElementById("Ruby").setAttribute("class", "hidden");
}

//updated code using sample from lesson on forms
function handleSelect(event) {
  event.preventDefault();
  //may need to change this to const w/ specific name, with input
  const selection1 = parseInt(document.getElementById("coffee").value);
  const selection2 = parseInt(document.getElementById("reptiles").value);
  const selection3 = parseInt(document.getElementById("geology").value);
  const selection4 = document.getElementById("forms");//added in for reset button function
  const selection5 = document.getElementById("computers");

  if (selection1 && selection2 && selection3) {
    if (selection1 === selection2 && selection2 == selection3) {
      document.getElementById("JavaScript").removeAttribute("class");
    } else if (selection1 === selection2 && selection2 !== selection3 || selection2 === selection3 && selection1 !== selection3 || selection1 === selection3 && selection1 !== selection2) {
      document.getElementById("Python").removeAttribute("class");
    } else if (coffee !== selection2 && coffee !== selection3) {
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
    document.getElementById("JavaScript").setAttribute("class", "hidden");//hides response, at this point, had to do it for each div id. Tried creating overarching div, but then the results didn't show up -- to refactor need to add in extra command about removing class on submit, needs more research and time.
    document.getElementById("Python").setAttribute("class", "hidden");
    document.getElementById("Ruby").setAttribute("class", "hidden");
    document.getElementById("coffee").value = null;
    document.getElementById("reptiles").value = null;
    document.getElementById("geology").value = null;
    document.getElementById("forms").value = null;
    document.getElementById("computers").value = null;
  });
});