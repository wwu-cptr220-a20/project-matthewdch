import React, { Component, createRef } from 'react';
import Home from './Home.js';
import About from './About.js';
import Catalog from './Catalog.js';
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
    }
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

  render() {
    return (
      <section class="content">
          <input type="file" accept="image/*" multiple="false" onChange={(e) => this.handleImageUpload(e)}/>
          <div class="container mt-4">
              <div class="card text-white bg-dark mb-3">
                  <div class="col-md-3">
                      <img class="card-img-top" alt="" ref={this.state.uploadedImage}/>
                  </div>
                  <div class="col-md-8">
                      <div class="card-body">
                          <p class="card-text">Secret Hitler</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

