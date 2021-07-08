import React, { Component } from 'react';

// Renders the about page
export default class About extends Component {
  render() {
    return (
      <div>
        <section>
          <h3>About</h3>
          <p className="About info">
            This is a project by Matthew DeChance, Garrett Moody, Grace Morales, Theo Moen, Will Hensel
            for CPTR220 at Walla Walla University. The project will be creating a virtual game shelf to
            catalog a person's board game colection. The user will be able to add, organize, and rate each game they own. This app will also
            allow users to save their progress in the longer games. Final Version (11/18/20).
                </p>
        </section>
        <section>
          <h3>Cataloging</h3>
          <p>
            Take every game you own and add it to the catalog. You can then rate
            the games based on how much you enjoy them. No one else can tell you
            that risk is a terrible game because its rated at a 5 on the website.
                </p>
        </section>
        <section>
          <h3 id="Saving">Saving</h3>
          <p>
            If you have ever spent multiple days playing monopoly, or spent 2 weeks
            trying to delay the inevitable in risk; then this will help by allowing
            you to upload a photo of your current game to set it up later. It also
            helps counter one of the players tampering with the board game.
                </p>
        </section>
      </div>
    )
  }
}