var name = "name";
function getName() {
  name = prompt("What is your name?");
  document.getElementById("button1").innerHTML = "Hello " + name + "!";
  setTimeout(() => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank', windowFeatures);
  }, 2000);
  
}
document.getElementById("button1").addEventListener("click", getName);
