
var rowList = ["3.5", "Monopoly", "50W/0L", "img/monopoly.jpg",
    "3", "Uno", "1W/600L", "img/uno.jpg",
    "5", "What do you Meme?", "?W/?L", "img/wdym.jpg",
    "4", "Villainous", "25W/2L", "img/villainous.jpg"];



/* Grab inputs for new row */


var ratingInput = document.querySelector("#ratingInput");
var gameInput = document.querySelector("#gameInput");
var ratioInput = document.querySelector("#ratioInput");
var imageInput = document.querySelector("#imageInput");
var submit = document.querySelector("#submit");
function createRow() {
    let newRow = document.createElement("tr")
    for (let i = 0; i < 4; i++) {
        let newCell = document.createElement("td")
        switch (i) {
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
            case 3: {
                let newImg = document.createElement("img");
                newImg.src = imageInput.value;
                newImg.classList.add("game_photo");
                newCell.append(newImg);
                newRow.append(newCell);
                break;
            }
        }
    }


    return newRow
}

function printRow(rowNum) {
    let newRow = document.createElement("tr")
    for (let i = 0; i < 4; i++) {
        let newCell = document.createElement("td")
        switch (i) {
            case 0:

                newCell.textContent = rowList[rowNum * 4];
                newRow.append(newCell);
                break;
            case 1:

                newCell.textContent = rowList[rowNum * 4 + 1];
                newRow.append(newCell);
                break;
            case 2:

                newCell.textContent = rowList[rowNum * 4 + 2];
                newRow.append(newCell);
                break;
            case 3: {
                let newImg = document.createElement("img");
                newImg.src = rowList[rowNum * 4 + 3];
                newImg.classList.add("game_photo");
                newCell.append(newImg);
                newRow.append(newCell);
                break;
            }
        }
    }


    return newRow
}

function appendRow() {
    console.log("Ran");
    var last = document.querySelector('tbody');
    last.append(createRow());
    console.log(last);
}



function render() {
    var body = document.querySelector('tbody');
    removeAllChildNodes(body);

    var last = document.querySelector('tbody');
    var rowSize = rowList.length / 4;
    for (let i = 0; i < rowSize; i++) {
        last.append(printRow(i));
    }
    appendRow();

}

submit.addEventListener('click', render);


function removeAllChildNodes(parent) {
    while (parent.firstChild) {

        parent.removeChild(parent.firstChild);
    }


}