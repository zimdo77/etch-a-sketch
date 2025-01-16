const container = document.querySelector("#container");

for (let i = 0; i < 16*16; i++) {
    container.appendChild(document.createElement("div"));
}

const grids = document.querySelectorAll("#container div");

grids.forEach((grid) => {
    grid.addEventListener("mouseover", handleHover);
})

function handleHover(event) {
    event.target.style.backgroundColor = "#D3D3D3";
}