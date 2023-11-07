// create a 10x10 grid 


const grid = document.getElementById("grid");

// Showing the grid by clicking on the button


const playButton = document.querySelector(".playBtn")

//creating a function which will stop the code to be excuted on more than one click
function onceClicked(){

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
    
    playButton.removeEventListener("click", onceClicked)
}

playButton.addEventListener("click", onceClicked) 






