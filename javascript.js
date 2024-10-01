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
        cell.style.backgroundColor = "green";
    });

    cell.addEventListener("mouseleave", () => {
        cell.style.backgroundColor = "green";
    });
});

