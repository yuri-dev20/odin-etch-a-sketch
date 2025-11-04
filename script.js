const board = document.querySelector("#board");
const boardSize = document.querySelector("#boardSize")
const submit = document.querySelector(".submit");
const reset = document.querySelector(".reset");

const createGrid = () => {
    if (boardSize.value) {
        let value = boardSize.value;
        
        for(let i = 0; i < value; i++) {
            createDivRow = document.createElement("div")
            createDivRow.classList.add("gridRow");
            board.appendChild(createDivRow);
    
        }
    } else {
        for(let i = 0; i < 16; i++) {
            createDivRow = document.createElement("div")
            createDivRow.classList.add("gridRow");
            board.appendChild(createDivRow);
    
        }

    }
    
}

const createGridItems = () => {
    if (boardSize.value) {
        let value = boardSize.value;
        const gridRows = document.querySelectorAll(".gridRow");
        
        gridRows.forEach(row => {
            for (let i = 0; i < value; i++) {
                const rowItem = document.createElement("div");
                rowItem.classList.add("paint");
                row.appendChild(rowItem);
    
            }
            
        });

    } else {
        const gridRows = document.querySelectorAll(".gridRow");
        
        gridRows.forEach(row => {
            for (let i = 0; i < 16; i++) {
                const rowItem = document.createElement("div");
                rowItem.classList.add("paint");
                row.appendChild(rowItem);
    
            }
            
        });
    }

}

const drawBoard = () => {
    board.innerHTML = "";
    createGrid();
    createGridItems();
    
    const squares = document.querySelectorAll(".paint");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.background = "black";

        });

    });
}

document.addEventListener("DOMContentLoaded", drawBoard);
submit.addEventListener("click", drawBoard);
reset.addEventListener("click", () => {
    board.innerHTML = "";
    createGrid();
    createGridItems();
    
});