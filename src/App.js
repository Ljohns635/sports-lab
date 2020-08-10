import React from "react";
import "./Game.css";
import "./Team.css";
import Game from "./component/Game";

function App(props) {
  return (
    <React.Fragment>
      <Game venue="Oakland Stadium" />
    </React.Fragment>
  );
}

export default App;
