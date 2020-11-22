import React, { Component } from 'react';

// Game is what is rendered when a game is clicked in the catalog table
export default class Game extends Component {
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
                  <div class="card-text" dangerouslySetInnerHTML={{ __html: this.game.description }}></div>
                  <p class="card-text">Rating: {this.game.rating} Stars</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
  