import React from 'react'
import classNames from 'classnames'

import './Button.css'

export const Button = ({ children, className, variant }) => {
  const variants = {
    'slides__arrow--left': variant === 'left',
    'slides__arrow--right': variant === 'right',
  }

  return (
    <button
      className={classNames(className, {
        ...variants,
      })}
    >
      {children}
    </button>
  )
}
