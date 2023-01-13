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
  const selection1 = document.getElementById(parseInt("input[name='coffee']:checked").value);
  const selection2 = document.getElementById(parseInt("input#reptiles").value);
  const selection3 = document.getElementById(parseInt("geology").value);
}

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
window.addEventListener("load", function() {
  document.getElementById("answers").addEventListener("submit", handleSelect)
});