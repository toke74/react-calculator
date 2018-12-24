import React, { Component } from "react";

import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import "./Navbar.css";

export class Navbar extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <Toolbar
          value={this.props.value}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        {backdrop}
        <main style={{ marginTop: "64px" }}>
          {/* <p>This is the page content!</p> */}
        </main>
      </div>
    );
  }
}

export default Navbar;
