const resetBtn = document.querySelector(".reset-btn");

function resetGrid(squares) {
  resetBtn.addEventListener("click", function () {
    resetSquares(squares);
  });
}

function resetSquares(squares){
  squares.forEach((square) => {
    square.style.backgroundColor = "black";
  });
}

export {resetGrid, resetSquares};
