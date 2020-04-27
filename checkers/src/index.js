import React from "react";
import ReactDOM from "react-dom";
import BoardView from "./BoardView";
import Checkers from "./checkers";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      checkers: new Checkers()
    };
  }

  movePiece = cell => {
    const { checkers } = this.state;

    checkers.selectCell(cell);

    this.setState({
      checkers
    });
  };

  render() {
    const { checkers } = this.state;
    console.log(checkers);
    return (
      <div className="checkers">
        <div className="current-player">
          {checkers.currentPlayer.name} - {checkers.currentPlayer.color}
        </div>
        <BoardView movePiece={this.movePiece} checkers={checkers} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
