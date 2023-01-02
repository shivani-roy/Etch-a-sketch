import createGrid from "./createGrid.js";
import { resetGrid, resetSquares } from "./resetGrid.js";

function setGrid(size, container) {
  const squares = createGrid(size, container);
  resetGrid(squares);
  resetSquares(squares);
  
}

export default setGrid;
