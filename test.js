const grid = document.getElementById("grid");
const difficulty = document.querySelector("#difficulty");
const playButton = document.querySelector(".playBtn");

// Add a click event listener to the "Play" button
playButton.addEventListener("click", function () {
    const difficultyLevel = difficulty.value;
    createGrid(difficultyLevel);
});

function createGrid(difficultyLevel) {
    grid.innerHTML = ''; // Clear the existing grid

    if (difficultyLevel == "easy") {
        for (let i = 1; i < 101; i++) {
            createSquareDiv("box", i);
        }
    } else if (difficultyLevel == "medium") {
        for (let i = 1; i < 82; i++) {
            createSquareDiv("boxMedium", i);
        }
    } else if (difficultyLevel == "hard") {
        for (let i = 1; i < 50; i++) {
            createSquareDiv("boxHard", i);
        }
    }
}

function createSquareDiv(className, i) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add(className);
    grid.appendChild(squareDiv);
    squareDiv.innerHTML = `${i}`;
    squareDiv.addEventListener("click", function () {
        squareDivOutput(squareDiv, i);
    });
}

function squareDivOutput(squareDiv, i) {
    squareDiv.style.backgroundColor = "blue";
    console.log("box number is:", i);
}
