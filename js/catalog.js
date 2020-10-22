console.log(5);


/* Grab inputs for new row */


var ratingInput = document.querySelector("#ratingInput");
var gameInput = document.querySelector("#gameInput");
var ratioInput = document.querySelector("#ratioInput");
var imageInput = document.querySelector("#imageInput");
var submit = document.querySelector("#submit");
function createRow() {
    let newRow = document.createElement("tr")
    for(let i = 0; i < 4; i++) {
        let newCell = document.createElement("td")
        switch(i) {
            case 0:

            newCell.textContent = ratingInput.value;
            newRow.append(newCell);
            break;
            case 1:

            newCell.textContent = gameInput.value;
            newRow.append(newCell);
            break;
            case 2:

             newCell.textContent = ratioInput.value;
             newRow.append(newCell);
            break;
            case 3:
            let newImg = document.createElement("img");
            newImg.src = imageInput.value;
            newCell.append(newImg);
            newRow.append(newCell);
            break;
        }
    }


    return newRow
}

function appendRow() {
    console.log("Ran");
var last  = document.querySelector('tbody');
last.append(createRow());
console.log(last);
}



submit.addEventListener('click', appendRow);