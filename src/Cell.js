import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './Cell.css';

const Cell = ({ isAlive, toggle, x, y }) => {
  const handleClick = () => {
    toggle({ x, y })
  }
  return (
    <div
      className={classnames('Cell', { 'Cell--alive': isAlive })}
      onClick={handleClick}
    >
    </div>
  );
}

Cell.propTypes = {
  isAlive: PropTypes.bool,
  toggle: PropTypes.func,
  x: PropTypes.number,
  y: PropTypes.number,
}

export default Cell;
