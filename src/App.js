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
                <a href="index.html" type="button" class="btn btn-dark">Home</a>
                <a href="info.html" type="button" class="btn btn-dark">About</a>
                <a href="catalog.html" type="button" class="btn btn-dark">Catalog</a>
            </nav>
           </header>
          <Switch>
            <Route path="/index.html">
              <Home />
            </Route>
            <Route path="/info.html">
              <About />
            </Route>
            <Route path="/catalog.html">
              <About />
            </Route>
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
        
      </main>
    )
  }
}

