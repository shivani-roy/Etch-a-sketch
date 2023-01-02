import setGrid from "./setGrid.js";

const container = document.querySelector(".container");
const newBtn = document.querySelector(".new-btn");
const squares= container.querySelectorAll('.square');

function newGrid() {
  newBtn.addEventListener("click", function () {
    
   //remove previous grid
    squares.forEach((square) => square.remove());

    let size = prompt("Enter size for new Grid");
    if (size > 100) {
       size= callPrompt()
    }
    if (size <= 100) {
      setGrid(size, container);
    }
  });
}

function callPrompt(){
   let size= prompt("Please enter a value below 100");
   if(size<=100){
      return size;
   }
   else{
      size= callPrompt()
   }
   return size;
}

export default newGrid;
