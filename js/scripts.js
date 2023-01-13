//Business logic, I think
function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("JavaScript").setAttribute("class", "hidden");
  document.getElementById("Python").setAttribute("class", "hidden");
  document.getElementById("Ruby").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResultsAndError();
}

//User Interface logic, I think
document.querySelector("form").onsubmit = function(event) {
  event.preventDefault();
  hideResultsAndError();
  const selection = document.getElementById(parseInt("coffee").value);
  const selection = document.getElementById(parseInt("reptiles").value);
  const selection = document.getElementById(parseInt("geology").value);
}