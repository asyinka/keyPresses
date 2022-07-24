const myBox = document.getElementById("box");
window.addEventListener("keydown", moveBox);
let x = 0;
let y = 0;

// Its good to know the current width of the screen
// So that we'd know the boundary we want
// to apply to our movement.
const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;

// I also need to know the size of the box
const BOX_WIDTH = 120;
const BOX_HEIGHT = 120;

// Variable to specify distance to move on key press
let nudge = 5;

function moveBox(event){
    console.log(x,y)
    switch (event.key) {
        case "ArrowDown":
            y += nudge;
            myBox.style.top = y + "px";
            break;
        case "ArrowUp":
            y -= nudge;
            myBox.style.top = y + "px";
            break;
        case "ArrowRight":
            x += nudge;
            myBox.style.left = x + "px";
            break;
        case "ArrowLeft":
            x -= nudge;
            myBox.style.left = x + "px";
            break;
        default:
            break;
    }
}


window.addEventListener("keydown", showKey);
function showKey(storeKey) {
    if (storeKey.key == "ArrowDown") {
        console.log(`${storeKey.key} is pressed`);
    } else if (storeKey.key == storeKey.key) {
        console.log(storeKey.key)
    }
}

// window.addEventListener("keypress", showKey => console.log(showKey.key));

//.key calls keyboard event
// function showKey(storeKey) {
//     console.log(storeKey.key);
// }