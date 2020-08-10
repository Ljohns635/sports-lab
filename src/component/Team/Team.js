import React from "react";
import audiio from "../Team/audiio/applause2.wav";
import audiio1 from "../Team/audiio/boooo.wav";
import "./Team.css";
class Team extends React.Component {
  state = {
    score: 0,
    shots: 0,
    success: false,
  };

  shotsTaken = () => {
    let audio = new Audio(audiio);
    let othAudio = new Audio(audiio1);
    this.setState((state) => {
      return { shots: state.shots + 1 };
    });
    let random = Math.floor(Math.random() * 20) + 1;
    const increase = random < 10;
    if (increase) {
      this.setState((state) => {
        audio.play();
        return {
          success: true,
          score: state.score + 1,
        };
      });
    } else {
      this.setState((state) => {
        othAudio.play();
        return {
          success: false,
        };
      });
    }
  };

  getPercentage() {
    const { shots, score } = this.state;
    const percentage = Math.round((score / shots) * 100);
    return Number.isNaN(percentage) ? "" : `${percentage}%`;
  }

  render() {
    return (
      <div className="othdivers">
        <h1 className="headerOne">{this.props.name}</h1>
        <img src={this.props.logo} alt="Sports Images" />
        <h3 className="paraOne">You made {this.state.shots} throws!</h3>
        {this.state.success
          ? "Yess!!! You made a touchdown"
          : " You missed, booo!!!"}
        <h3 className="paraTwo">scores = {this.state.score}</h3>
        <button onClick={this.shotsTaken}>Shoot Your Shot</button>
        <h3>Shots Taken = {this.getPercentage()}</h3>
      </div>
    );
  }
}

export default Team;
