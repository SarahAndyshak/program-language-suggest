//Business logic, I think
function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("JavaScript").setAttribute("class", "hidden");
  document.getElementById("Python").setAttribute("class", "hidden");
  document.getElementById("Ruby").setAttribute("class", "hidden");
}

//this is the original code for loading window, readded, program runs again
window.onload = function() {
  hideResultsAndError();

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
  //may need to change this to const w/ specific name, with input
  const selection1 = document.getElementById(parseInt("coffee").value);
  const selection2 = document.getElementById(parseInt("reptiles").value);
  const selection3 = document.getElementById(parseInt("geology").value);
  console.log(selection1)
  console.log(selection2)
  console.log(selection3)

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
  };
};