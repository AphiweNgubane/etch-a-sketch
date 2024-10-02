const grid = document.querySelector("#grid");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }
}

document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "blue";
    });

    cell.addEventListener("mouseleave", () => {
        cell.style.backgroundColor = "lightblue";
    });
});


const newGridBtn = document.createElement("button");
newGridBtn.textContent = "Generate New Grid";

const body = document.querySelector("body");
body.insertBefore(newGridBtn, grid);

let sqrsPerSide;

newGridBtn.addEventListener("click", () => {
    sqrsPerSide = prompt("Enter the number of squares per side from 1 to 100:", 16);
    sqrsPerSide = parseInt(sqrsPerSide);

    if (isNaN(sqrsPerSide) || sqrsPerSide < 1 || sqrsPerSide > 100) {
        alert("Please only enter a number between 1 and 100.");
    } else {
        createGrid(sqrsPerSide);
    }
});

function createGrid(sqrsPerSide) {
    grid.innerHTML = '';

    for (let k = 0; k < sqrsPerSide * sqrsPerSide; k++) {
        const newCells = document.createElement("div");
        newCells.classList.add("newCells");
        grid.appendChild(newCells);

        newCells.style.flex = `0 0 calc(100% / ${sqrsPerSide})`;
        newCells.style.height = `calc(100% / ${sqrsPerSide})`;
    }

    document.querySelectorAll(".newCells").forEach(newCells => {
        newCells.addEventListener("mouseenter", () => {
            newCells.style.backgroundColor = "blue";
        });

        newCells.addEventListener("mouseleave", () => {
            newCells.style.backgroundColor = "lightblue";
        });
    });
}