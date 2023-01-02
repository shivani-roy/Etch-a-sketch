import layoutGrid from "./layoutGrid.js";
import changeSquareColor from "./changeSquareColor.js";

function createGrid(size, container) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      //  square.textContent = i + 1;
      container.appendChild(square);
    }
  }
  layoutGrid(size, container);
  const squares = [...container.querySelectorAll(".square")];
  changeSquareColor(squares);
  return squares;
}

export default createGrid;
