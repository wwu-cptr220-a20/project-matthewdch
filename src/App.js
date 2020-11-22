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
        <div id="menu-background" class="container mt-4">
          <div id="catalog-game-menu" class="card text-white bg-dark border-light mb-3">
            <div class="col-md-8">
              <div class="card-body">
                <h1 class="card-title">{this.game.name}</h1>
                <p class="card-text">{this.game.description}</p>
                <p class="card-text">Rating: {this.game.rating} Stars</p>
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
      gameTitle: '',
      gameComments: '',
      gameArr: [],
      fileURL: null,
    }

    this.submitData = this.submitData.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.uploadSingleFile = this.uploadSingleFile.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(name) {
      let tempEl = this.state.gameArr.find((element) => element.props.gameTitle === name)
      console.log(tempEl);
      var index = this.state.gameArr.indexOf(tempEl);
      this.state.gameArr[index] = (<div />);
      this.setState( {
        gameArr: this.state.gameArr
      })
  }

  uploadSingleFile(e) {
    this.setState({
      fileURL: URL.createObjectURL(e.target.files[0])
    })
}

  submitData() {
    this.state.gameArr.push(<GameCard key={this.state.gameTitle} gameTitle={this.state.gameTitle} gameComments={this.state.gameComments} img={this.state.fileURL} delete={this.delete}/>);
    this.setState( {
      gameArr: this.state.gameArr
    })
  }

  handleTitle(event) {
    this.setState({gameTitle: event.target.value})
  }

  handleComment(event) {
    this.setState({gameComments: event.target.value})
  }

  render() {
    return (
      <section class="content">

        <div class="container mt-4">
          <div class="card text-white bg-secondary mb-4">
            <form onSubmit={this.submitData}>
              <div className="form-group">
                <label for="boardName">Board Game Title:</label><br />
                <input onChange={this.handleTitle} class="form-control inputs" type="text"></input><br />
                <label for="boardName">How the game left off:</label><br />
                <textarea onChange={this.handleComment} class="form-control inputs" type="text"></textarea><br />
                <label for="boardName">Upload a picture of the board:</label><br />
                <input class="inputs upload" type="file" accept="image/*" multiple="false" onChange={(e) => this.uploadSingleFile(e)} />
                <input type="submit" value="Submit Game Data" class="btn btn-primary"></input>
              </div>
            </form>
          </div>
        {<div>{this.state.gameArr}</div>}
        </div>
      </section>
    )
  }
}

class GameCard extends Component {
  render() {
    return (
      <div className="pad">
      <div class="row text-white bg-dark mb-3">
            <div class="card-body flex">
              <h3 class="cards-text left">{this.props.gameTitle}</h3>
              <p class="cards-text">{this.props.gameComments}</p>
            </div>
            <img class="card-img-top game_photo flex" alt="" src={this.props.img} />
      </div>
      <button class="btn btn-primary" onClick={() => {this.props.delete(this.props.gameTitle)}}>Delete</button>
      </div>
    )
  }
}
