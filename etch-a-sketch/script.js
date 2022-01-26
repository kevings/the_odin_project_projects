const DEFAULT_SIZE = 16;

const main = document.querySelector('.main');
const newGridBtn = document.getElementById('newGrid');

// add event listener to new grid button
newGridBtn.addEventListener('click', newGrid);

// draw the grid 
function drawGrid (gridSize){
    let totalSquares = gridSize**2;
    let width = 320/gridSize;
    // change the drawBlocks width/height
    document.body.style.setProperty("--grid-size", width + 'px');
    // draw blocks
    for (let i = 0; i < totalSquares; i++){
            const div = document.createElement('div');
            div.classList.add('drawBlocks');
            div.addEventListener('mouseenter', e => div.classList.add('colorBlocks'));
            main.appendChild(div);
        }
}

// clears current grid
function clearGrid(){
    main.innerHTML = '';
}

// makes new grid
function newGrid (e) {
    let newGridSize = parseInt(prompt("How many squares?"));
    // add integer check
    if (newGridSize < 100 && newGridSize > 0 && Number.isInteger(newGridSize) && !isNaN(newGridSize) ){
        clearGrid();
        drawGrid(newGridSize);
    }
    else {
        alert("That is not a valid response");
    }
}

window.onload = () => {
    drawGrid(DEFAULT_SIZE);
}