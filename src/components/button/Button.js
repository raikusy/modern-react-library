import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Button.css'

function Button({ children, disabled, className, ...others }) {
  return (
    <button
      className={classNames(['Button', className])}
      disabled={disabled}
      {...others}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.style
}

export default Button
