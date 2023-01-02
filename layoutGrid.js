function layoutGrid(size, container) {
  container.style.gridTemplateColumns = `repeat(${size},1fr)`;
  container.style.gridTemplateRows = `repeat(${size},1fr)`;
}

export default layoutGrid;