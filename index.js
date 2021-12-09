// Your code here
function getLeftPosition () {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    return left;
}

function getBottomPosition() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    return bottom;
}

function moveDodgerLeft() {
    const left = getLeftPosition();
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const left = getLeftPosition();

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
      }
}

function moveDodgerDown() {
    const bottom = getBottomPosition();

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 1}px`;
      }
}

function moveDodgerUp() {
    const bottom = getBottomPosition();

    if (bottom < 380) {
        dodger.style.bottom = `${bottom + 1}px`;
      }
}

document.addEventListener("keydown", function (e) {
    switch(e.key) {
        case ("ArrowLeft"):
            moveDodgerLeft();
            break;
        case ("ArrowRight"):
            moveDodgerRight();
            break;
        case ("ArrowDown"):
            moveDodgerDown();
            break;
        case ("ArrowUp"):
            moveDodgerUp();
            break;
    }
});