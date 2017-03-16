import React, { PropTypes } from 'react'
import classnames from 'classnames'
import './Button.css'

const Button = ({ children, onClick, theme }) => {
  return (
    <button className={classnames('Button', `Button--${theme}`)} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['green', 'red']),
}

Button.defaultProps = {
  theme: 'green',
}

export default Button

