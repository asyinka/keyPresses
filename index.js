const myBox = document.getElementById("box");
window.addEventListener("keydown", moveBox);
let x = 0;
let y = 0;

function moveBox(event){
    switch (event.key) {
        case "ArrowDown":
            y += 5;
            myBox.style.top = y + "px";
            break;
        case "ArrowUp":
            y -= 5;
            myBox.style.top = y + "px";
            break;
        case "ArrowRight":
            x += 5;
            myBox.style.left = x + "px";
            break;
        case "ArrowLeft":
            x -= 5;
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