import React, { Component, createRef } from 'react';
import './css/style.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default class App extends Component {
  render () {
    return (
      <Router basename={process.env.PUBLIC_URL+'/'}>
        <div>
          <header>
            <h1>The Game Shelf</h1>
            <nav>
              <Link to='/'>
                <button className="btn btn-dark">Home</button>
              </Link>
              <Link to='/info'>
                <button className="btn btn-dark">About</button>
              </Link>
              <Link to='/catalog'>
                <button className="btn btn-dark">Catalog</button>
              </Link>
              <Link to='/gamebookmark'>
                <button className="btn btn-dark">Saved Games</button>
              </Link>
            </nav>
           </header>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/info" exact component={About} />
            <Route path="/catalog" exact component={Catalog} />
            <Route path="/gamebookmark" exact component={GameBookmark} />
            <Route path="/catalog/:gameId" exact component={Game} />
          </Switch>
        </div>
        <footer>
          <p>&#169; Matthew DeChance, Garrett Moody, Grace Morales, Theo Moen, Will Hensel, 2020</p>
        </footer>
      </Router>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <section>
          <h3>Topic Overview</h3>
          <p>This project serves to be able to keep track of your board games.
              It will be something that you can show your friends to see what they want to play, you can keep track of wins/losses.
              Check the weather to see if its a good day to stay inside and play, or even find related games that you might want to get.</p>
        </section>
        <section>
          <h3>Potential Applications</h3>
          <ul>
            <li>Have weather available on screen.</li>
            <li>Inventory your current board games and make notes for missing pieces, etc.</li>
            <li>Track wins/losses</li>
          </ul>
        </section>
        <section>
          <h3>Useful Info to look into</h3>
          <ul>
            <li><a href= "https://openweathermap.org/api"> Weather API</a></li>
            <li><a href= "https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win">Score tracking</a></li>
            <li><a href= "https://www.creativebloq.com/features/best-html-apis">Other maybe useful apis</a></li>
          </ul>
        </section>
      </div>
    )
  }
}

class About extends Component {
  render() {
    return (
      <div>
          <section>
            <h3>About</h3>
              <p className="About info">
                This is a project by Matthew DeChance for CPTR220 at Walla Walla University. The project will be creatign a virtual game shelf to catalog a persons board game colection. The user will be able to organize and interact with the data to rate, make notes, and track stats for each game they own. Work in progress as of 10/7/20.
              </p>
          </section>
          <section>
            <h3>Weather Info</h3>
              <p>
               Have you ever wondered if a storm will clear up soon, or if it will actually rain today? As soon as you want to do something the weather flips. Check the integrated weather widget to see what the forecast will be before starting that game of monopoly.
              </p>
              <img className="weather" src="img/weather.png" alt="weather widget"></img>
          </section>
          <section>
            <h3 id="Stats">Stat Tracking</h3>
              <p>
              If you think you cant be beat at your favorite game, but have no way to prove it, fear not! Now you can input your wins and losses for each game into this and you will get a comparison of how often you win. Show off to your friends and prove to them that you <del>have no life.</del> <del>are better than them.</del> <ins> should go pro!</ins>
              </p>
              <img className="stats" src="img/graph.jpg" alt="win/loss stats graph"></img>
          </section>
      </div>
    )
  }
}

class Catalog extends Component {

  constructor(props) {
    super(props)

    this.tempClientID = 'glHGH0lSL1';
    this.searchLimit = 15;

    this.state = {
        games: [
          {id: 1, name:"Secret Hitler", rating:5, description:"Find the fascist"},
          {id: 2, name:"Munchkin", rating:4, description:"Explore the dungeons"},
          {id: 3, name:"Bang!", rating:5, description:"Kill the renegades"},
      ],
      searchResults: [
      ],
      inputText: '',
      searchInputText: '',
      awaitingResults: false,
      allowSearch: false,
    }

    this.handleGameDeleteClick = this.handleGameDeleteClick.bind(this)
    this.handleGameElementClick = this.handleGameElementClick.bind(this)
  }


  handleGameDeleteClick(game) {
    let index = this.state.games.indexOf(game);
    console.log(index);
    if(index > -1) {
      this.setState(() => this.state.games.splice(index, 1));
    }
  }

  handleGameElementClick(game) {
    if(game.rating === 5) {
      this.setState(() => game.rating = 0);
    }
    else {
      this.setState(() => game.rating += 1);
    }
  }
  
  // Input logic
  addNewGame() {
    if(this.state.inputText !== '') {
      this.setState(() => this.state.games.push({
        name: this.state.inputText,
        rating: 0
      }));
  
      this.setState({
        inputText: '',
      })
    }
  }


/*

MODAL

*/

  handleSearchInput(value) {
    this.setState({
      searchInputText: value,
    });
  }

  handleSearchSubmitButtonClick() {
    this.addSelectionToCollection();
  }

  handleSearchModalOpenButtonClick() {
    this.setState({
      searchInputText: '',
      searchResults: [],
    });

    this.renderSearchTable();
  }

  componentDidMount() {
    this.setState({
      allowSearch: true,
    })
  }

// Searches Board Game Atlas for terms in state.searchInputText
  getResults() {
    this.setState({awaitingResults: true})
    // TODO change client ID to get from env var
    let url = `https://api.boardgameatlas.com/api/search?name=${this.state.searchInputText}&limit=${this.searchLimit}&client_id=${this.tempClientID}`
    return fetch(url).then((response) => {
      return response.json();
    }).then((json) =>{
      json.games.forEach((game, index) => this.setState(() => (this.state.searchResults.push({id: index + 1, name: game.name, selected: false, description: game.description}))));
    }).then(
      this.setState({awaitingResults: false})
    );
  }

// Adds selected games to collection
  addSelectionToCollection() {
    let games = [];
    this.state.games.forEach((game) => {
      game.id = games.length + 1;
      games.push(game);
    });
    this.state.searchResults.forEach((game) => {
      if(game.selected) {
        games.push({
            id: games.length + 1,
            name: game.name,
            rating: 0
        });
      }
    });
    this.setState({
      games: games,
    });
  }


  render() {
    return (
      <div>
        <section className="content">
            <div className="container mt-4 mb-4">
                <label for="boardGameInput">Enter a board game</label>
                <div className="form-inline">
                    <input type="text" className="form-control" value={this.state.inputText} onChange={e => this.setState({inputText: e.target.value})}/>
                    <button type="button" className="btn btn-success ml-4" id="submit-button" onClick={() => this.addNewGame()}>Submit</button>
                    <button type="button" className="btn btn-primary ml-4" data-toggle="modal" data-target="#searchModal" id="search-modal-open-button">Search</button>
                </div>
            </div>
            <div className="container mt-4 mb-4">
                <table className="table table-dark">
                    <tbody id="game-list">
                      {
                        this.state.games.map((game) => 
                          <tr>
                            <th scope="row" className="text-dark">{game.id}</th>
                            <Link to={{pathname: '/catalog/' + game.id, games: this.state.games}}><td>{game.name}</td></Link>
                            <td onClick={() => this.handleGameElementClick(game)}>{game.rating} stars</td>
                            <td>
                              <button onClick={() => this.handleGameDeleteClick(game)}>
                                <i className="fa fa-trash-o" />
                              </button>
                            </td>
                          </tr>
                      )
                      }
                    </tbody>
                </table>
            </div>
            <div className="container mt-4 mb-4">
                <h1>How to</h1>
                <ul>
                    <li>
                        <p>
                            Enter the name of a board game to add to your collection in the input field and click submit
                            to add a new game.
                        </p>
                    </li>
                    <li>
                        <p>
                            Click on the star rating on the game to change it.
                        </p>
                    </li>
                    <li>
                        <p>
                            Click on the search button to bring up the search box.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
        <div className="modal fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title" id="searchModalLabel">Search</h2>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    <div className="container mt-4 mb-4">
                        <label for="boardGameInput">Search for a game</label>
                        <div className="form-inline">
                            <input type="text" className="form-control" id="searchInput" value={this.state.searchInputText} onChange={e => this.handleSearchInput(e.target.value)}/>
                            <button type="button" className="btn btn-success ml-4" id="search-button" disabled={this.state.searchInputText === '' ? (this.state.allowSearch ? true : false) : false}  onClick={() => this.getResults()}>Search</button>
                        </div>
                    </div>
                    <div className="container mt-4 mb-4">
                        <table className="table">
                            <tbody id="game-search-list">
                              {
                                
                                this.state.awaitingResults ?
                                {} : this.state.searchResults.map((game) => { return(
                                  <tr>
                                    <th scope="row">{game.id}</th>
                                    <td>{game.name}</td>
                                    <td>
                                      {
                                        game.selected ? <i className="far fa-check-square" onClick={() => {
                                          this.setState(() => game.selected = !game.selected);
                                        }}></i>
                                        :
                                        <i className="far fa-square" onClick={() => {
                                          this.setState(() => game.selected = !game.selected);
                                        }}></i>
                                      }
                                    </td>
                                  </tr>
                                )})
                              }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" id="search-submit-button" data-dismiss="modal" onClick={() => this.addSelectionToCollection()}>Submit</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

class Game extends Component {
  constructor(props) {
    super(props);
    const { gameId } = this.props.match.params;
    const { games } = this.props.location;
    this.game = games.find(game => game.id == gameId)
  }
  
  render() {
    return (
    <section class="content">
      <div class="container mt-4">
          <div class="card text-white bg-dark mb-3">
              <div class="col-md-8">
                  <div class="card-body">
                      <p class="card-text">{this.game.name}</p>
                  </div>
              </div>
          </div>
      </div>
    </section>
    )
  }
}

class GameBookmark extends Component {
  // https://dev.to/asimdahall/client-side-image-upload-in-react-5ffc

  constructor(props) {
    super(props);
    this.state = {
      uploadedImage: createRef(null),
      gameTitle: '',
      gameComments: '',
    }

    this.submitData = this.submitData.bind(this);
  }

  handleImageUpload(e) {
    const [file] = e.target.files;
    if(file) {
      const reader = new FileReader();
      const {current} = this.state.uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  }

  submitData() {
    this.setState( {
      gameTitle: this.element.value,
      gameComments: this.element2.value,
      
    });
  }

  render() {
    return (
      <section class="content">
          
          <div class="container mt-4">
              <div class="card text-white bg-secondary mb-4">
                  <form onSubmit={this.submitData}>
                    <div className="form-group">
                    <label for="boardName">Board Game Title:</label><br/>
                    <input ref={el => this.element = el} class="form-control inputs" type="text"></input><br />
                    <label for="boardName">How the game left off:</label><br/>
                    <textarea ref={el => this.element2 = el} class="form-control inputs" type="text"></textarea><br />
                    <label for="boardName">Upload a picture of the board:</label><br/>
                    <input class="inputs upload" type="file" accept="image/*" multiple="false" onChange={(e) => this.handleImageUpload(e)}/>
                    <input type="submit" value="Submit Game Data" class="btn btn-primary"></input>
                    </div>
                  </form>
              </div>
              <div class="row text-white bg-dark mb-3">
                  
                  
                      <div class="card-body flex">
                        
                        <h3 class="cards-text left">{this.state.gameTitle}</h3>
                        <p class="cards-text">{this.state.gameComments}</p>
                        
                            
                      </div>
                      <img class="card-img-top game_photo flex" alt="" ref={this.state.uploadedImage}/>
                  
              </div>
          </div>
      </section>
    )
  }
}

