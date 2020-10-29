let dodger = document.getElementById('dodger');

function moveDodgerLeft(){
    let leftNum = dodger.style.left.replace('px', '');
    let left = parseInt(leftNum, 10);

    if(left > 0){
        dodger.style.left = `${left - 3}px`;
    }
}

function moveDodgerRight(){
    let rightNum = dodger.style.left.replace('px', '');
    let right = parseInt(rightNum, 10);

    if(right > 0 ){
        dodger.style.left = `${right + 3}px`;
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft()
    }
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        moveDodgerRight()
    }
})
