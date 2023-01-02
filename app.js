import newGrid from "./newGrid.js";
import setGrid from "./setGrid.js";

const container = document.querySelector(".container");

window.addEventListener("DOMContentLoaded", function () {
  
 init();
 
});

function init(){
  //set grid
  setGrid(16, container);
  
  //create new grid
  newGrid();
}



// container.addEventListener("mouseover", function (e) {
//   const element = e.target;
//   if (element.classList.contains("square")) {
//     element.style.background = "red";
//   }
// });

//alternate code for dynamic columns

// d3.select(".container").style(
//   "grid-template-columns",
//   `repeat(16, minmax(5px, 1fr))`
// );
// d3.select(".container").style(
//   "grid-template-rows",
//   `repeat(16, minmax(5px, 1fr))`
// );
