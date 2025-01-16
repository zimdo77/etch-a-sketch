const BOARD_SIDE_LENGTH = 700;
const DEFAULT_SQUARES_PER_SIDE = 16;

const container = document.querySelector("#container");
container.style.width = `${BOARD_SIDE_LENGTH}px`;

constructBoard(DEFAULT_SQUARES_PER_SIDE);

const button = document.querySelector("button");
const input = document.querySelector("input");
button.addEventListener("click", handleButtonClick);


function handleButtonClick(event) {
    const squaresPerSide = parseInt(input.value, 10);
    
    if (Number.isInteger(squaresPerSide)) {
        removeBoard();
        constructBoard(squaresPerSide);
        input.value = '';
    } else {

    }
}

function removeBoard() {
    const grids = document.querySelectorAll("#container div");
    grids.forEach((grid) => grid.remove());
}

function constructBoard(squaresPerSide) {
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        let grid = document.createElement("div");
        grid.style.width = `${BOARD_SIDE_LENGTH/squaresPerSide}px`;
        grid.style.height = `${BOARD_SIDE_LENGTH/squaresPerSide}px`;
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