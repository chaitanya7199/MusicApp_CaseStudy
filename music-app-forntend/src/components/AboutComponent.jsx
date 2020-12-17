import React, { Component } from "react";

class AboutComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <img
          src="https://t4.ftcdn.net/jpg/03/21/89/37/240_F_321893740_vIrKnY5dYwFbpMM9gVf9u5Cjepz8YamK.jpg"
          alt="Mana Music Logo"
          width="100%"
          length="50%"
        />
        <div className="card" id="about">
          <div className="card-body">
            <h2 className="card-title">Mana Music</h2>
            <p className="card-text">
              Mana Music was established in 2020. Available on Android and iOS. Mana
              Music is a free app that provides unlimited streaming and free
              unlimited song downloads across regional and international music.
              Users can search for music by title.
        </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutComponent;
