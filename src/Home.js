import React, { Component } from 'react';

export default class Home extends Component {
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