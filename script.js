/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */


const mainGrid = document.querySelector(".grid")

mainGrid.addEventListener(
    "mouseenter", 
    () => {
        mainGrid.style.outline = "6px solid red";
});


mainGrid.addEventListener(
    "mouseleave", 
    () => {
        mainGrid.style.outline = "";
});
const randColor = () => {
    let hexColor = Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };
const mainCell = document.querySelectorAll(".cell");

mainCell.forEach((cell) => {

    cell.addEventListener(
        "mouseenter",
        (e) => {
            cell.style.outline = "4px solid green"
            console.log(e)
        }
    )
    cell.addEventListener("click", () => {
        if (cell.style.backgroundColor) {
          cell.style.backgroundColor = "";
        } else {
          cell.style.backgroundColor = `#${randColor()}`;
        }
      });
});
const changeButton = document.querySelector(".btn2")
const body = document.body;
body.addEventListener("click", (event) => {
  console.log(event.code);
  if (changeButton) {
    body.style.backgroundColor === ""
      ? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
      : (body.style.backgroundColor = "");
    changeButton.innertext === "CHANGE BACKGROUND COLOR" ? changeButton.innerText = "Dark" : changeButton.innerText = "light" 
  }
});


const button = document.querySelector(".btn");

function reload() {
    reload = location.reload();
}
button.addEventListener("click", reload, false);