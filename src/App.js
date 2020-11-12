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
              <Link to='/'>
                <button className="btn btn-dark">Home</button>
              </Link>
              <Link to='/info'>
                <button className="btn btn-dark">About</button>
              </Link>
              <Link to='/catalog'>
                <button className="btn btn-dark">Catalog</button>
              </Link>
            </nav>
           </header>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/info" component={About} />
            <Route path="/catalog" component={Catalog} />
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
  render() {
    return (
      <main>
        <section className="content">
            <div className="container mt-4 mb-4">
                <label for="boardGameInput">Enter a board game</label>
                <div className="form-inline">
                    <input type="text" className="form-control" id="boardGameInput"/>
                    <button type="button" className="btn btn-success ml-4" id="submit-button">Submit</button>
                    <button type="button" className="btn btn-primary ml-4" data-toggle="modal" data-target="#searchModal" id="search-modal-open-button">Search</button>
                </div>
            </div>
            <div className="container mt-4 mb-4">
                <table className="table table-dark">
                    <tbody id="game-list">
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
                            <input type="text" className="form-control" id="searchInput"/>
                            <button type="button" className="btn btn-success ml-4" id="search-button" disabled="true14">Search</button>
                        </div>
                    </div>
                    <div className="container mt-4 mb-4">
                        <table className="table">
                            <tbody id="game-search-list">
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

