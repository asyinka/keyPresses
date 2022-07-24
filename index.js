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

function moveBox(event) {
  switch (event.key) {
    case "ArrowDown":
      move("y", nudge);
      break;
    case "ArrowUp":
      move("y", -nudge);
      break;
    case "ArrowRight":
      move("x", nudge);
      break;
    case "ArrowLeft":
      move("x", -nudge);
      break;
    default:
      break;
  }
}

function move(axis, distance) {
  if (axis !== "y" && axis !== "x") throw Error("Axis can only be x or y.");

  if (axis === 'x') {
    x += distance;
    myBox.style.left = x + "px";
  } else {
    y += distance;
    myBox.style.top = y + "px";
  }
}

window.addEventListener("keydown", showKey);
function showKey(storeKey) {
  if (storeKey.key == "ArrowDown") {
    console.log(`${storeKey.key} is pressed`);
  } else if (storeKey.key == storeKey.key) {
    console.log(storeKey.key);
  }
}

// window.addEventListener("keypress", showKey => console.log(showKey.key));

//.key calls keyboard event
// function showKey(storeKey) {
//     console.log(storeKey.key);
// }
