import React from "react";
import "./Player.css";

function Details(props) {
  return (
    <div className="c-player--details">
      <h3 className="details-title">{props.song.songTitle}</h3>
      <h4 className="details-artist">{props.song.singer}</h4>
    </div>
  );
}

export default Details;
