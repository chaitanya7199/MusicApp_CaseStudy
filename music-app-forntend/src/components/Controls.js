import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

class Controls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: this.props.isPlaying,
    };
  }

  componentDidMount() {
    this.setState({ isPlaying: this.props.isPlaying });
  }

  render() {
    console.log(this.state.isPlaying);
    return (
      <div className="c-player--controls">
        <button className="skip-btn" onClick={() => this.props.SkipSong(false)}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button
          className="play-btn"
          onClick={() => this.props.setIsPlaying(this.props.isPlaying)}
        >
          <FontAwesomeIcon icon={this.props.isPlaying ? faPause : faPlay} />
        </button>
        <button className="skip-btn" onClick={() => this.props.SkipSong()}>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
    );
  }
}

export default Controls;
