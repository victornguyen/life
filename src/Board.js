import React, { Component, PropTypes } from 'react';
import isEqual from 'lodash/isEqual'
import Cell from './Cell';
import './Board.css';

// just concerned with receiving new `cells` array and rendering result
// also needs to pass a `toggleCell` callback to `Cell` component so users can click them

class Board extends Component {

  static propTypes = {
    cells: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.bool)
    ),
    toggle: PropTypes.func,
  }

  shouldComponentUpdate({ cells: nextCells }) {
    return !isEqual(this.props.cells, nextCells)
  }

  renderCell({ isAlive, x, y }) {
    return (
      <Cell
        isAlive={isAlive}
        key={`x${x}y${y}`}
        toggle={this.props.toggle}
        x={x}
        y={y}
      />
    );
  }

  renderRow(row = [], y) {
    return (
      <div className="Board__row" key={y}>
        {
          row.map((cell, x) => (
            this.renderCell({ isAlive: cell, x, y })
          ))
        }
      </div>
    )
  }

  render() {
    return (
      <div className="Board">
        { this.props.cells.map((row, y) => this.renderRow(row, y)) }
      </div>
    )
  }
}

export default Board;

