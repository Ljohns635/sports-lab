import React from "react";
import Team from "../Team/Team";
import "./Game.css";
import img from "./img/niners.png";
import img1 from "./img/raiders.jpg";
function Game(props) {
  return (
    <React.Fragment>
      <h1 className="headerTwo">Welcome to {props.venue}</h1>;
      <div className="divers">
        <Team name="SF Niners" logo={img} />;
        <Team name="Oakland Raiders" logo={img1} />;
      </div>
    </React.Fragment>
  );
}

export default Game;
