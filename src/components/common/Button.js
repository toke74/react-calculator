import React from "react";
import "./Button.css";

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Button = props => (
  <div
    className={`button-wrapper ${isOperator(props.value) ? null : "operator"}`}
    // onClick={() => props.handleClick(props.value)}
  >
    {/* {props.children} */}
    <button name={props.value} onClick={e => props.onClick(e.target.name)}>
      {props.name}
    </button>
  </div>
);
