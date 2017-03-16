import React, { Component } from 'react'
import { createCells, toggleCell } from './utils/cells'
import { evolve } from './utils/cells'
import { BOARD_DEFAULTS, SPEED_DEFAULT } from './constants'
import Board from './Board'
import Button from './Button'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    const { ROWS: rows, COLS: cols } = BOARD_DEFAULTS
    this.state = {
      cells: createCells({ rows, cols, random: true }),
      cols,
      rows,
      speed: SPEED_DEFAULT,
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

  step = () => {
    this.setState({
      cells: evolve(this.state.cells)
    })
  }

  tick = () => {
    this.stop()
    this.step()
  }

  evolve = () => {
    const { evolving, speed } = this.state
    if (!evolving) {
      this.setState({ evolving: true })
    }
    this.step()
    this.timeout = setTimeout(() => {
      this.evolve()
    }, speed)
  }

  stop = () => {
    this.setState({ evolving: false })
    clearTimeout(this.timeout)
  }

  generateCells = ({ random }) => {
    const { cols, rows } = this.state
    this.setState({
      cells: createCells({ cols, rows, random })
    })
  }

  clear = () => {
    this.stop()
    this.generateCells({ random: false })
  }

  randomise = () => {
    this.stop()
    this.generateCells({ random: true })
  }

  handleSpeedChange = (event) => {
    this.setState({ speed: event.target.value })
  }

  render() {
    const { cells, evolving, speed } = this.state
    return (
      <div className="App">
        <h1>Life: The Game 👾</h1>
        <p>Tip: you can click on a cell to (un)kill it.</p>
        <Board cells={cells} toggle={this.toggle} />
        <div className="App__controls">
          <Button onClick={this.randomise}>NEW GAME</Button>
          <Button onClick={this.clear}>CLEAR</Button>
          <Button onClick={this.tick}>TICK</Button>
          {
            evolving
              ? <Button onClick={this.stop} theme="red">STOP</Button>
              : <Button onClick={this.evolve}>EVOLVE</Button>
          }
        </div>
        <div className="App__speed">
          Evolution speed:
          <input
            className="App__slider"
            type="range"
            min="50"
            max="1000"
            step="50"
            value={speed}
            onChange={this.handleSpeedChange}
          />
          {speed}ms
        </div>
      </div>
    )
  }
}

export default App

