// create a 10x10 grid 


const grid = document.getElementById("grid");

// Showing the grid by clicking on the button

const difficulty = document.querySelector("#difficulty");

const playButton = document.querySelector(".playBtn")

//creating a function which will stop the code to be excuted on more than one click
function onceClicked() {

    let difficultyLevel = difficulty.value;

    if (difficultyLevel == "easy") {

        for (let i = 1; i < 101; i++) {

            createSquareDiv("box", i); // created a funciton and nested function and saved the following code lines

            //const squareDiv = document.createElement("div");
            //squareDiv.classList.add("box");
            //grid.appendChild(squareDiv);
            //squareDiv.innerHTML = `${[i]}`;

            //squareDiv.style.backgroundColor = "blue"
           // console.log("box number is:", i)


        }
    }

    else if (difficultyLevel == "medium") {

        for (let i = 1; i < 82; i++) {

            createSquareDiv("boxMedium", i); // created a funciton and saved the following code lines
            //const squareDiv = document.createElement("div");
            //squareDiv.classList.add("box");
            //grid.appendChild(squareDiv);
            //squareDiv.innerHTML = `${[i]}`;

            //squareDiv.style.backgroundColor = "blue"
           // console.log("box number is:", i)


        }


    }

    else if (difficultyLevel == "hard") {
        for (let i = 1; i < 50; i++) {

            createSquareDiv("boxHard", i) // created a funciton and saved the following code lines
            //const squareDiv = document.createElement("div");
            //squareDiv.classList.add("box");
            //grid.appendChild(squareDiv);
            //squareDiv.innerHTML = `${[i]}`;

            //squareDiv.style.backgroundColor = "blue"
           // console.log("box number is:", i)

        }


    }
    playButton.removeEventListener("click", onceClicked);
}

playButton.addEventListener("click", onceClicked);

function squareDivOutput(squareDiv, i) {
    squareDiv.style.backgroundColor = "blue";
    console.log("box number is:", i);

}

function createSquareDiv(className, i) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add(className);
    grid.appendChild(squareDiv);
    squareDiv.innerHTML = `${[i]}`;
    squareDiv.addEventListener("click", function () {
        squareDivOutput(squareDiv, i); // created a funciton and saved the following code lines
        /*                 squareDiv.style.backgroundColor = "blue"
                        console.log("box number is:", i) */

    });
    return squareDiv; // Return the created div element
}

