const board = document.querySelector("#board");
const boardSize = document.querySelector("#boardSize")
const btn = document.querySelector("#btn");

const createGrid = () => {
    if (boardSize.value) {
        let value = boardSize.value;
        
        for(let i = 0; i < value; i++) {
            createDivRow = document.createElement("div")
            createDivRow.classList.add("gridRow");
            // createDivRow.textContent = "a";
            board.appendChild(createDivRow);
    
        }
    } else {
        for(let i = 0; i < 16; i++) {
            createDivRow = document.createElement("div")
            createDivRow.classList.add("gridRow");
            // createDivRow.textContent = "a";
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
                rowItem.textContent = "b";
                row.appendChild(rowItem);
    
            }
            
        });

    } else {
        const gridRows = document.querySelectorAll(".gridRow");
        
        gridRows.forEach(row => {
            for (let i = 0; i < 16; i++) {
                const rowItem = document.createElement("div");
                rowItem.textContent = "b";
                row.appendChild(rowItem);
    
            }
            
        });
    }

}

const drawBoard = () => {
    board.innerHTML = "";
    board.style.border = "8px solid rgb(234, 218, 77)"
    createGrid();
    createGridItems();
}

document.addEventListener("DOMContentLoaded", drawBoard)

btn.addEventListener("click", drawBoard)