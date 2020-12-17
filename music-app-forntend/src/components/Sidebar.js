import React, { useEffect } from "react";
import "./css/Sidebar.css";
import "./css/SidebarOption.css";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Sidebar(props) {

  function goToHome() {
    props.goToHome()
  }

  function goToUserWishlist() {
    props.goToUserWishlist()
  }

  function logout() {
    props.logout()
  }

  return (
    <div className="sidebar">
      <img className="sidebar__logo" src="/ManaMusic1.jpg" alt="Mana Music" />
      <h6>Mana Music</h6>
      <hr></hr>
      <div className="sidebarOption" onClick={goToHome}>
        <HomeIcon className="sidebarOption_icon" />
        &nbsp;&nbsp;
        <p className="sidebarOption__text">Home</p>
      </div>
      <div className="sidebarOption" onClick={goToUserWishlist}>
        <LibraryMusicIcon className="sidebarOption_icon" />
        &nbsp;&nbsp;
        <p className="sidebarOption__text">Wishlist</p>
      </div>
      <div className="sidebarOption" onClick={logout}>
        <ExitToAppIcon className="sidebarOption_icon" />
        &nbsp;&nbsp;
        <p className="sidebarOption__text">Log Out</p>
      </div>
      {/*
      <SidebarOption Icon={HomeIcon} title="Home" goToHome={goToHome} />
      <br></br>
      <SidebarOption Icon={LibraryMusicIcon} title="Wishlist" goToUserWishlist={goToUserWishlist} />
      <br></br>
      <SidebarOption Icon={SettingsIcon} title="Settings" />
      */}

    </div>
  );
}

export default Sidebar;