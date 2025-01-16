const BOARD_SIDE_LENGTH = 700;
const DEFAULT_SQUARES_PER_SIDE = 16;
const MAX_SQUARES_PER_SIDE = 100;

constructBoard(DEFAULT_SQUARES_PER_SIDE);

const button = document.querySelector("button");
const input = document.querySelector("input");
button.addEventListener("click", handleButtonClick);

///////////////
// FUNCTIONS //
///////////////

function constructBoard(squaresPerSide) {
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        let grid = document.createElement("div");
        grid.style.width = `${BOARD_SIDE_LENGTH/squaresPerSide}px`;
        grid.style.height = `${BOARD_SIDE_LENGTH/squaresPerSide}px`;
        grid.style.borderWidth = `${16/squaresPerSide}px`;
        container.appendChild(grid);
    }

    makeBoardInteractive();
}

function makeBoardInteractive() {
    const grids = document.querySelectorAll("#container div");

    grids.forEach((grid) => {
        grid.addEventListener("mouseover", handleHover);
    });

    function handleHover(event) {
        event.target.style.backgroundColor = "black";
    }
}

function handleButtonClick() {
    const squaresPerSide = parseInt(input.value, 10);
    
    if (Number.isInteger(squaresPerSide) && squaresPerSide <= MAX_SQUARES_PER_SIDE && squaresPerSide > 0) {
        removeBoard();
        constructBoard(squaresPerSide);
        input.value = '';
    }
}

function removeBoard() {
    const grids = document.querySelectorAll("#container div");
    grids.forEach((grid) => grid.remove());
}