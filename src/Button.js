import React, { PropTypes } from 'react'
import './Button.css'

const Button = ({ children, onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default Button

