import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './Cell.css';

const Cell = ({ isAlive }) => {
  return (
    <div className={classnames('Cell', { 'Cell--alive': isAlive })}>
    </div>
  );
}

export default Cell;
