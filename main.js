// create a 10x10 grid 

const grid = document.getElementById("grid");

// Showing the grid by selecting the deficulting level and clicking on the button

const difficulty = document.querySelector("#difficulty");

const playButton = document.querySelector(".playBtn")

playButton.addEventListener("click", function () {

    let difficultyLevel = difficulty.value;
    grid.innerHTML = "";

    if (difficultyLevel == "easy") {

        for (let i = 1; i < 101; i++) {

            createSquareDiv("box", i); // created a funciton and nested function to save the following code lines

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

            createSquareDiv("boxMedium", i); // created a funciton and nested function to save the following code lines
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

            createSquareDiv("boxHard", i) // created a funciton and nested function to save the following code lines
            //const squareDiv = document.createElement("div");
            //squareDiv.classList.add("box");
            //grid.appendChild(squareDiv);
            //squareDiv.innerHTML = `${[i]}`;

            //squareDiv.style.backgroundColor = "blue"
            // console.log("box number is:", i)

        }

    }

})

// FUNCTION CREATED TO REPEAT THE CODE

function createSquareDiv(className, i) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add(className);
    grid.appendChild(squareDiv);
    squareDiv.innerHTML = `${[i]}`;
    squareDiv.addEventListener("click", function () {

        squareDiv.style.backgroundColor = "blue";
        console.log("box number is:", i)


    });
    
    return squareDiv; // Return the created div 
}

