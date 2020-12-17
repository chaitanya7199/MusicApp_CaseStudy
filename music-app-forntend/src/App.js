import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import UserRegistrationComponent from "./components/UserRegistrationComponent";
import UserLoginComponent from "./components/UserLoginComponent";
import UserWishlistComponent from "./components/UserWishlistComponent";
import AboutComponent from "./components/AboutComponent";
import AdminLoginComponent from "./components/AdminLoginComponent";
import ListSongComponent from "./components/ListSongComponent";
import CreateSongComponent from "./components/CreateSongComponent";
import ViewSongComponent from "./components/ViewSongComponent";
import UpdateSongComponent from "./components/UpdateSongComponent";
import SearchSongsComponent from "./components/SearchSongsComponent";
import Player from "./components/Player";

class App extends Component {
  componentDidMount() {
    document.title = "Mana Music";
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={UserLoginComponent}></Route>
              <Route
                path="/user-registration"
                exact
                component={UserRegistrationComponent}
              ></Route>
              <Route
                path="/user-login"
                exact
                component={UserLoginComponent}
              ></Route>
              <Route
                exact
                path="/search-songs/:id"
                component={SearchSongsComponent}
              ></Route>
              {/*<Route
                path="/display-songs/:id"
                component={DisplaySongsComponent}
              ></Route>
              <Route path="/player" exact component={Player}></Route>*/}
              <Route
                path="/user-wishlist"
                component={UserWishlistComponent}
              ></Route>
              <Route path="/about" component={AboutComponent}></Route>

              <Route path="/admin-login" component={AdminLoginComponent}></Route>
              <Route path="/songs" component={ListSongComponent}></Route>
              <Route path="/add-song/:id" component={CreateSongComponent}></Route>
              <Route path="/view-song/:id" component={ViewSongComponent}></Route>

              {/* <Route path = "/update-song/:id" component = {UpdateSongComponent}></Route> */}
            </Switch>
          </div>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

export default App;
