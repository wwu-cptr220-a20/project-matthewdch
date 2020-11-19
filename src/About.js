import React, { Component } from 'react';

export default class About extends Component {
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