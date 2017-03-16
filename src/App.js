import React, { Component } from 'react';
import { createCells, toggleCell } from './utils/cells'
import { evolve } from './utils/cells'
import { BOARD_DEFAULTS } from './constants'
import Board from './Board';
import './App.css';

// Contain UI to set board size and randomize

class App extends Component {

  constructor(props) {
    super(props)
    const { ROWS: rows, COLS: cols } = BOARD_DEFAULTS
    this.state = {
      cells: createCells({ rows, cols }),
      cols,
      rows,
      evolving: false,
    }
  }

  toggle = ({ x, y }) => {
    this.setState({
      cells: toggleCell({
        x,
        y,
        cells: this.state.cells,
      })
    })
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

  generateCells = ({ random }) => {
    const { cols, rows } = this.state
    this.setState({
      cells: createCells({ cols, rows, random })
    })
  }

  clear = () => {
    this.generateCells({ random: false })
  }

  randomise = () => {
    this.generateCells({ random: true })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Game of Life!!!!</h1>
        <Board cells={this.state.cells} toggle={this.toggle} />
        <button onClick={this.randomise}>NEW GAME</button>
        <button onClick={this.clear}>CLEAR</button>
        <button onClick={this.tick}>TICK</button>
        <button onClick={this.evolve}>EVOLVE</button>
        <button onClick={this.stop}>STAHP</button>
      </div>
    );
  }
}

export default App;
