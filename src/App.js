import React, { Component } from 'react';
import Home from './Home.js';
import About from './About.js';
import Catalog from './Catalog.js';
import Game from './Game.js';
import GameBookmark from './GameBookmark.js';
import './css/style.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


// App is the main entry to the website. It contains the routing to the other components.
export default class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL + '/'}>
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
            <Route path="/" exact component={Home} />
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
