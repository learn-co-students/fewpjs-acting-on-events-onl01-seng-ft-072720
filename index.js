// Your code here
let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

console.log(dodger.style.left);

console.log(dodger.style.bottom);

dodger.style.bottom = "0px";

document.addEventListener("keydown", function(e) {
    console.log(e.key);
});
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  function moveDodgerRight() {
      let rightNumbers = dodger.style.left.replace("px", "");
      let right = parseInt(rightNumbers, 10);

      if (right > 0) {
          dodger.style.left = `${right + 1}px`;
      }
  }
  document.addEventListener("keydown", function(e) {
      if (e.key == "ArrowRight") {
          moveDodgerRight();
      }
  });