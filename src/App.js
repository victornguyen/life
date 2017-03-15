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
      cells: createCells({ rows: 40, cols: 40 }),
      // TODO: constants to share default board size?
      cols: 80,
      rows: 40,
      evolving: false,
    }
  }

  toggleCell() {

  }

  tick = () => {
    // this.stop()
    this.setState({
      cells: evolve(this.state.cells)
    })
  }

  evolve = () => {
    this.stop()
    this.tick()
    this.timeout = setTimeout(() => {
      this.evolve()
    }, 50)
    // TODO: make speed adjustable?
  }

  stop = () => {
    clearTimeout(this.timeout)
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
        <button onClick={this.tick}>TICK</button>
        <button onClick={this.evolve}>EVOLVE</button>
        <button onClick={this.stop}>STAHP</button>
      </div>
    );
  }
}

export default App;
