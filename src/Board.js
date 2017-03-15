import React, { Component, PropTypes } from 'react';
import Cell from './Cell';
import './Board.css';

// just concerned with receiving new `cells` array and rendering result
// also needs to pass a `toggleCell` callback to `Cell` component so users can click them

class Board extends Component {

  static propTypes = {
    cells: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.bool)
    ),
    toggleCell: PropTypes.func,
  }

  renderCell(isAlive, index) {
    return (
      <Cell isAlive={isAlive} key={`cell${index}`} />
    );
  }

  renderRow(row = [], index) {
    return (
      <div className="Board__row" key={`row${index}`}>
        { row.map((cell, i) => this.renderCell(cell, i)) }
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.props.cells.map((row, i) => this.renderRow(row, i)) }
      </div>
    )
  }
}

export default Board;

