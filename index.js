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

  // Check the box boundaries here
  // Lets check for x boundary first
  // Note: x,y refers to the top left corner.
  // With a box size of 120
  // If the window width is 420, then it means our box will be touching the edge already when its at x=300 (Think about it) 
  // If the window width is 420, also our box will be touching the edge already when its at x=0 (Think about it) 
  // So our boundary for the width are x=0 and x=300 (420 - 120)
  // SO lets code it
  let newX = x + distance; //Trying to compute the new x without modifying the normal x yet
  // You can combine the checks, but let me separate it for your understanding
  // Check 1: x=0 (we don't want x to be less that 0)
  if (newX < 0) return; 
  // Check 2: x=300 (420 - 120) (we don't want x to be greater that 300(according to our assumptions))
  if (newX > (WINDOW_WIDTH - BOX_WIDTH)) return; 

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
