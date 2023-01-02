import randomColor from "./generateRandomColor.js";

const changeSquareColor = function (squares) {
  squares.forEach((square) => {
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = `${randomColor()}`;
    });
  });
};

export default changeSquareColor;