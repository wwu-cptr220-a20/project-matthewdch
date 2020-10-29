function renderTrack(song) {
    var track = document.createElement("img");
    track.src = song.artworkUrl100;
    track.alt = song.trackName;
    track.title = song.trackName;
    track.addEventListener('click', function() {
        playTrackPreview(song, songTile);
      });
  
    document.querySelector("#records").appendChild(track);
}

function renderSearchResults(obj) {
    var records = document.getElementById("records");
    records.innerHTML = "";
    obj.results.forEach(renderTrack);
    if(obj.results.length == 0){
        renderError(new Error("No results found"));
    }
}

function fetchTrackList(searchTerm) {
    toggleSpinner();
    return fetch("https://itunes.apple.com/search?entity=song&limit=25&term=" + searchTerm)
        .then(function(response){
          return response.json();
        })
        .then(function(data){
          renderSearchResults(data);
        })
        .catch(function(error){
          renderError(error);
        })
        .then(function(){
          toggleSpinner();
        });
}

document.querySelector('button').addEventListener("click", function (event) {
    event.preventDefault();
    fetchTrackList(document.querySelector('#searchQuery').value);
});

function renderError(error) {
    var obj = document.createElement('p');
    obj.classList.add("alert");
    obj.classList.add("alert-danger");
    obj.textContent = error.message;
    document.querySelector("#records").append(obj);
}

function toggleSpinner() {
    let spinner = document.querySelector('.fa-spinner');
    spinner.classList.toggle('d-none');
}

//Function got from problem 06
function playTrackPreview(track, img) {
    if(state.previewAudio.src !== track.previewUrl){ //if a new track to play
      document.querySelectorAll('img').forEach(function(element){
        element.classList.remove('fa-spin');
      }); //stop whoever else is spinning
  
      state.previewAudio.pause(); //pause current
      state.previewAudio = new Audio(track.previewUrl); //create new audio
      state.previewAudio.play(); //play new
      img.classList.add('fa-spin'); //start the spinning
    } 
    else {
      if(state.previewAudio.paused){ 
        state.previewAudio.play();
      } else {
        state.previewAudio.pause();
      }
      img.classList.toggle('fa-spin'); //toggle the spinning
    }
}