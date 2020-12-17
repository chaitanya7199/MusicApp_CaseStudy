import React, { Component } from "react";
import Details from "./Details";
import Controls from "./Controls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import "./Player.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: this.props.song,
    };
  }

  /* changeNextSongIndex = () => {
    this.setState({ nextSongIndex: this.state.currentSongIndex + 1 });
  }; */

  componentDidMount() {
    this.setIsPlaying(false);
  }

  setIsPlaying = (isPlaying) => {
    console.log(isPlaying);
    var audioEl = document.getElementById(this.state.song.songIndex);
    if (isPlaying === false) {
      this.setState({
        song: {
          ...this.state.song,
          isPlaying: true,
        },
      });
      audioEl.play();
    } else {
      this.setState({
        song: {
          ...this.state.song,
          isPlaying: false,
        },
      });
      audioEl.pause();
    }
    this.props.buttonToggle();
  };

  render() {
    return (
      <div>
        <div className="c-player">
          <audio id={this.state.song.songIndex}>
            <source src={this.state.song.url}></source>
          </audio>

          <h4>Playing now</h4>

          <div className="c-player--details">
            <h3 className="details-title">{this.state.song.songTitle}</h3>
            <h4 className="details-artist">{this.state.song.singer}</h4>
          </div>

          <button
            className="skip-btn"
            onClick={() => this.props.skipSong(false)}
          >
            <FontAwesomeIcon icon={faBackward} />
          </button>
          <button
            className="play-btn"
            onClick={() => this.setIsPlaying(this.state.song.isPlaying)}
          >
            <FontAwesomeIcon
              icon={this.state.song.isPlaying ? faPause : faPlay}
            />
          </button>
          <button className="skip-btn" onClick={() => this.props.skipSong()}>
            <FontAwesomeIcon icon={faForward} />
          </button>
        </div>
      </div>
    );
  }
}

export default Footer;
