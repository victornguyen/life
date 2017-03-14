import React, { Component, PropTypes } from 'react';

// just concerned with receive new `cells` array and rendering result
// also needs to pass a `toggleCell` callback to `Cell` component so users can click them

class Board extends Component {

  static propTypes = {
    cells: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
    ),
    toggleCell: PropTypes.func,
  }

  renderCell(cell) {
    return (
      <span>{cell}</span>
    )
  }

  renderRow() {

  }

  render() {
    return (
      <div>
        {
          this.props.cells.map(row => {
            return (
              <div>
                {row.map(cell => {
                  return this.renderCell(cell)
                })}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Board;

