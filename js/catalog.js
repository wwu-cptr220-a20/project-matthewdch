console.log(5);


/* Grab inputs for new row */


var ratingInput = document.querySelector("#ratingInput");
var gameInput = document.querySelector("#gameInput");
var ratioInput = document.querySelector("#ratioInput");
var imageInput = document.querySelector("#imageInput");

function createRow() {
    let newRow = document.createElement("tr")
    for(let i = 0; i < 4; i++) {
        let newCell = document.createElement("td")
        switch(i) {
            case 0:

            newCell.textContent = ratingInput.textContent;

            break;
            case 1:

            newCell.textContent = gameInput.textContent;

            break;
            case 2:

             newCell.textContent = ratioInput.textContent;

            break;
            case 3:
            let newImg = document.createElement("img");
            newImg.baseURI = imageInput.textContent;
            newCell.append(newImg);
            break;
        }
    }


    return newRow
}

function appendRow() {
var last  = document.querySelector('tbody tr:last-child');
last.append(createRow());
}

appendRow();