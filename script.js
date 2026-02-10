var name = ", what is your name?";
function getName() {
  name = prompt("What is your name?");
  document.getElementById("button1").innerHTML = "hello" + name + " !";
}
document.getElementById("button1").addEventListener("click", getName);
