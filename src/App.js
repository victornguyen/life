import React, { Component } from 'react';
import { createCells } from './utils/cells'
import { evolve } from './utils/neighbours'
import Board from './Board';
import './App.css';

// Contain UI to set board size and randomize

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cells: createCells({ rows: 20, cols: 80 }),
      // TODO: constants to share default board size?
      cols: 80,
      rows: 40,
    }
  }

  toggleCell() {

  }

  tick = () => {
    this.setState({
      cells: evolve(this.state.cells)
    })
  }

  randomise() {
    const { cols, rows } = this.state
    this.setState({
      cells: createCells({
        cols,
        rows,
        randomise: true
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Game of Life!!!!</h1>
        <Board cells={this.state.cells} />
        <button onClick={this.tick}>EVOLVE</button>
      </div>
    );
  }
}

export default App;
