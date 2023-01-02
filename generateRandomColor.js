const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += colors[randomNum()];
  }
  return hexColor;
}

function randomNum() {
  return Math.floor(Math.random() * colors.length);
}

export default randomColor;
