// create a 10x10 grid 

const grid = document.getElementById("grid");



for (let i = 1; i < 101; i++) {

    const squareDiv = document.createElement("div")
    squareDiv.classList.add("box")
    const square = grid.appendChild(squareDiv);

    square.innerHTML = `${[i]}`


}




// 