'use strict';

let tempClientID = 'glHGH0lSL1';
let searchLimit = 15;

// Global state variable
let state = {
    games: [
        {name:"Secret Hitler", rating:5},
        {name:"Munchkin", rating:4},
        {name:"Bang!", rating:5},
    ],
    searchResults: [
    ],
    inputText: '',
    searchInputText: '',
};

// Create the visible elements
function createGameElement(game, id) {
    let newGame = document.createElement('tr');
    newGame.classList.add("text-dark");
    let th = document.createElement('th');
    th.scope = "row";
    th.textContent = id;
    
    newGame.appendChild(th);

    let tr1 = document.createElement('td');
    tr1.textContent = game.name;
    
    newGame.appendChild(tr1);

    let tr2 = document.createElement('td');
    tr2.textContent = game.rating + " stars";
    tr2.addEventListener('click', function() {
        if(game.rating == 5) {
            game.rating = 0;
        }
        else {
            game.rating += 1
        }
        renderGameTable();
    });

    newGame.appendChild(tr2);

    let tr3 = document.createElement('td');
    let button = document.createElement('button');
    button.type = 'button';
    button.addEventListener('click', function() {
        let index = state.games.indexOf(game);
        console.log(index);
        if(index > -1) {
            state.games.splice(index, 1);
        }
        renderGameTable();
    });
    let icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-trash-o');
    button.appendChild(icon);
    tr3.appendChild(button);
    
    newGame.appendChild(tr3);

    return newGame;
}

// Render the table with the visible elements
function renderGameTable() {
    let tableElement = document.querySelector('#game-list');
    tableElement.innerHTML = '';
    state.games.forEach((game, index) => {
        tableElement.appendChild(createGameElement(game, index + 1));
    });
    renderInput();
}
renderGameTable();

// Input logic
function addNewGame() {
    state.games.push({
        name: state.inputText,
        rating: 0
    });
    state.inputText = '';
    renderGameTable();
}

document.getElementById('boardGameInput').addEventListener('input', function() {
    state.inputText = document.getElementById('boardGameInput').value;
    renderInput();
});

document.getElementById('submit-button').addEventListener('click', addNewGame);

function renderInput() {
    document.getElementById('boardGameInput').value = state.inputText;
    if(state.inputText == '') {
        document.getElementById('submit-button').disabled = true;
    }
    else {
        document.getElementById('submit-button').disabled = false;
    }
}

/*

MODAL

*/

// Input listener
document.getElementById('searchInput').addEventListener('input', function() {
    state.searchInputText = document.getElementById('searchInput').value;
    renderSearchInput();
});

// Search button click listener
document.getElementById('search-button').addEventListener('click', function() {
    state.searchResults = [];
    getResults().then(() => renderSearchTable());
})

// Submit button click listener
document.getElementById('search-submit-button').addEventListener('click', function() {
    addSelectionToCollection();
})

// // Modal open button listener
document.getElementById('search-modal-open-button').addEventListener('click', function() {
    state.searchInputText = '';
    state.searchResults = [];
    renderSearchTable();
})

// Create the visible elements
function createResultElement(game, id) {
    let newGame = document.createElement('tr');

    let th = document.createElement('th');
    th.scope = "row";
    th.textContent = id;
    newGame.appendChild(th);

    let td = document.createElement('td');
    td.textContent = game.name;
    newGame.appendChild(td);

    let td2 = document.createElement('td');
    let check = document.createElement('i');
    check.classList.add("far");
    check.classList.add("fa-square");
    newGame.addEventListener('click', function() {
        game.selected = !game.selected;
        renderSearchTable();
    });
    if(game.selected){
        check.classList.replace("fa-square", "fa-check-square");
    }
    else {
        check.classList.replace("fa-check-square", "fa-square");
    }
    td2.appendChild(check);
    newGame.appendChild(td2);
    
    return newGame;
}

// Render the table with the visible elements
function renderSearchTable() {
    let tableElement = document.getElementById('game-search-list');
    tableElement.innerHTML = '';
    state.searchResults.forEach((game, index) => {
        tableElement.appendChild(createResultElement(game, index + 1));
    });
    renderSearchInput();
}

renderSearchTable();

// Renders text input and search button
function renderSearchInput() {
    document.getElementById('searchInput').value = state.searchInputText;
    if(state.searchInputText == '') {
        document.getElementById('search-button').disabled = true;
    }
    else {
        document.getElementById('search-button').disabled = false;
    }
}

// Searches Board Game Atlas for terms in state.searchInputText
function getResults() {
    // TODO change client ID to get from env var
    let url = `https://api.boardgameatlas.com/api/search?name=${state.searchInputText}&limit=${searchLimit}&client_id=${tempClientID}`
    return fetch(url).then((response) => {
        return response.json();
    }).then((json) =>{
        json.games.forEach((game) => {state.searchResults.push({name: game.name, selected: false})});
        
    });
}

// Adds selected games to collection
function addSelectionToCollection() {
    state.searchResults.forEach((game) => {
        if(game.selected) {
            state.games.push({
                name: game.name,
                rating: 0
            });
        }
    })
    renderGameTable();
}


//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
    /* eslint-disable */
    if(typeof state !== 'undefined') 
      module.exports.state = state;
}