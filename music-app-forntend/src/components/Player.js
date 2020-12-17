import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./css/Player.css";
import SearchSongsComponent from "./SearchSongsComponent";

function Player() {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <SearchSongsComponent />
      </div>
    </div>
  );
}

export default Player;
