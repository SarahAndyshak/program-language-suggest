//Business logic, I think
function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("JavaScript").setAttribute("class", "hidden");
  document.getElementById("Python").setAttribute("class", "hidden");
  document.getElementById("Ruby").setAttribute("class", "hidden");
}

console.log("check")
//updated code using sample from lesson on forms
function handleSelect(event) {
  event.preventDefault();
  //may need to change this to const w/ specific name, with input
  const coffee = parseInt(document.getElementById("coffee").value);
  const selection2 = parseInt(document.getElementById("reptiles").value);
  const selection3 = parseInt(document.getElementById("geology").value);
  console.log(coffee)

  if (coffee && selection2 && selection3) {
    if (coffee === selection2 && selection2 == selection3) {
      document.getElementById("JavaScript").removeAttribute("class");
    } else if (coffee === selection2 && selection2 !== selection3 || selection2 === selection3 && coffee !== selection3 || coffee === selection3 && coffee !== selection2) {
      document.getElementById("Python").removeAttribute("class");
    } else if (coffee !== selection2 && coffee !== selection3) {
      document.getElementById("Ruby").removeAttribute("class");
    } 
    } else {
      document.getElementById("error-message").removeAttribute("class");
    }
window.addEventListener("load", function() {
  document.getElementById("answers").addEventListener("submit", handleSelect)
});
}