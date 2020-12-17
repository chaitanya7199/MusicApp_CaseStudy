import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div>
              <a href="/about" className="navbar-brand">
                Mana Music
              </a>
            </div>
            <div>
              <a
                href={`/user-wishlist/${
                  JSON.parse(localStorage.getItem("users")).userId
                }`}
                className="navbar-brand"
              >
                Wishlist
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
