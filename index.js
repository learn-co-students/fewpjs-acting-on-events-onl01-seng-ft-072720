// Your code here
let dodger = document.getElementById("dodger");


function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
      dodger.style.backgroundColor = "#FF69B4";
    }
  }


  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
      dodger.style.backgroundColor = "#00FF00"; 
    }
  }

  function moveDodgerUp() {
    let upNumbers = dodger.style.bottom.replace("px", "");
    let up = parseInt(upNumbers, 10);
   
    if (up >= 0) {
      dodger.style.bottom = `${up + 1}px`;
      dodger.style.backgroundColor = "#FFFFFF"; 
    }
  }



  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
    if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
  });
