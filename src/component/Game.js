import React from "react";
import Team from "./Team";

function Game(props) {
  return (
    <React.Fragment>
      <h1 className="headerTwo">Welcome to {props.venue}</h1>;
      <div className="divers">
        <Team name="SF Niners" logo="./img/niners.png" />;
        <Team name="Oakland Raiders" logo="./img/raiders.jpg" />;
      </div>
    </React.Fragment>
  );
}

export default Game;
