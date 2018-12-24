import React from "react";
import DrawerToggleButton from "./DrawerToggleButton";

import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <div className="drawerToggle">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>

      <ul>
        <span className="mt-4">
          {" "}
          <b>Calculator </b>
        </span>

        <li>
          <span className="icon-size ml-3">
            <i className="fa fa-calculator " />
          </span>
          <a href="/">
            <span className="ml-3">Standard</span>
          </a>
        </li>

        <li>
          <span className=" icon-size ml-3">
            <i className="fa fa-flask " />
          </span>
          <span className="ml-2">
            <a href="/scientific"> Scientific</a>
          </span>
        </li>

        <li>
          <span className="icon-size ml-3">
            <i className="fa fa-calendar " />
          </span>
          <a href="/dateCalculation">
            <span className="ml-3">Date Calculation</span>
          </a>
        </li>

        <span className="mt-3">
          {" "}
          <b>Converter</b>
        </span>

        <li>
          <span className="icon-size ml-3">
            <i className="fa fa-database" />
          </span>
          <a href="/currency">
            <span className="ml-3">Currency</span>
          </a>
        </li>

        <li>
          <span className=" icon-size ml-3">
            <i className="fa fa-calculator" />
          </span>
          <span className="ml-2">
            <a href="/length"> Length</a>
          </span>
        </li>

        <li>
          <span className="icon-size ml-3">
            <i className="fa fa-cube " />
          </span>
          <a href="/voluma">
            <span className="ml-3">Volume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
