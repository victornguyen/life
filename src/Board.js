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

  renderCell(isAlive) {
    return (
      <Cell isAlive={isAlive} />
    );
  }

  renderRow(row = []) {
    return (
      <div className="Board__row">
        { row.map(cell => this.renderCell(cell)) }
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.props.cells.map(row => this.renderRow(row)) }
      </div>
    )
  }
}

export default Board;

