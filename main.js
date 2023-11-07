// create a 10x10 grid 


const grid = document.getElementById("grid");

// Showing the grid by clicking on the button



const playButton = document.querySelector(".playBtn")

let created = false;

playButton.addEventListener("click", function () {



    // creating the 100 boxes with the loop
    for (let i = 1; i < 101; i++) {

        const squareDiv = document.createElement("div");
        squareDiv.classList.add("box");
        grid.appendChild(squareDiv);

        squareDiv.innerHTML = `${[i]}`;

        // create the click envet
        squareDiv.addEventListener("click", function () {
            squareDiv.style.backgroundColor = "blue"
            console.log("box number is:", i)
        })

    }

}, { once: true }); // this will limit the code execution only to the first click






