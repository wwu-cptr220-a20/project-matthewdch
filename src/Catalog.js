import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Catalog extends Component {

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