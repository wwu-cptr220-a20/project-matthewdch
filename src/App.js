import React, { Component } from 'react';
import './css/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render () {
    return (

      <Router>
        <div>
          <header>
            <h1>The Game Shelf</h1>
            <nav>
              <Link to={process.env.PUBLIC_URL + '/'}>
                <button className="btn btn-dark">Home</button>
              </Link>
              <Link to={process.env.PUBLIC_URL + '/info'}>
                <button className="btn btn-dark">About</button>
              </Link>
              <Link to={process.env.PUBLIC_URL + '/catalog'}>
                <button className="btn btn-dark">Catalog</button>
              </Link>
            </nav>
            </header>
          
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
          <Route path={process.env.PUBLIC_URL + '/info'} component={About} />
          <Route path={process.env.PUBLIC_URL + '/catalog'} component={Catalog} />
          
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
      <main>
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
      </main>
    )
  }
}

class About extends Component {
  render() {
    return (
      <main>

      </main>
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
          {name:"Secret Hitler", rating:5},
          {name:"Munchkin", rating:4},
          {name:"Bang!", rating:5},
      ],
      searchResults: [
      ],
      inputText: '',
      searchInputText: '',
      awaitingResults: false,
    }

    this.handleGameDeleteClick = this.handleGameDeleteClick.bind(this)
    this.handleGameElementClick = this.handleGameElementClick.bind(this)
    this.getResults = this.getResults(this)
  }


  handleGameDeleteClick(game) {
    let index = this.state.games.indexOf(game);
    console.log(index);
    if(index > -1) {
      this.setState(() => this.state.games.splice(index, 1));
    }
  }

  handleGameElementClick(game) {
    if(game.rating == 5) {
      this.setState(() => game.rating = 0);
    }
    else {
      this.setState(() => game.rating += 1);
    }
  }
  
  // Input logic
  addNewGame() {
    if(this.state.inputText != '') {
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

// Searches Board Game Atlas for terms in state.searchInputText
  getResults() {
    this.setState({awaitingResults: true})
    // TODO change client ID to get from env var
    let url = `https://api.boardgameatlas.com/api/search?name=${this.state.searchInputText}&limit=${this.searchLimit}&client_id=${this.tempClientID}`
    return fetch(url).then((response) => {
      return response.json();
    }).then((json) =>{
      json.games.forEach((game) => this.setState(() => (this.state.searchResults.push({name: game.name, selected: false}))));
    }).then(
      this.setState({awaitingResults: false})
    );
  }

// Adds selected games to collection
  addSelectionToCollection() {
    this.setState(() => this.state.searchResults.forEach((game) => {
      if(game.selected) {
        this.state.games.push({
            name: game.name,
            rating: 0
        });
      }
    }))
  }


  render() {
    return (
      <main>
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
                            <td>{game.name}</td>
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
                            <button type="button" className="btn btn-success ml-4" id="search-button" disabled={this.state.searchInputText == '' ? true : false}  onClick={this.getResults}>Search</button>
                        </div>
                    </div>
                    <div className="container mt-4 mb-4">
                        <table className="table">
                            <tbody id="game-search-list">
                              {
                                
                                this.state.awaitingResults ?
                                {} : this.state.searchResults.map((game) => {
                                  <tr>
                                    <th scope="row">{game.id}</th>
                                    <td>{game.name}</td>
                                    <td>
                                      {
                                        game.selected ? <i className="far fa-square"></i>
                                        :
                                        <i className="far fa-check-square"></i>
                                      }
                                      <i className="far fa-square" onClick={() => {
                                        this.setState(() => game.selected = !game.selected);
                                      }}/>
                                    </td>
                                  </tr>
                                })
                              }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" id="search-submit-button" data-dismiss="modal">Submit</button>
                </div>
              </div>
            </div>
          </div>
      </main>
    )
  }
}

