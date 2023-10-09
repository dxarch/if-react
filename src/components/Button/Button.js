import React from 'react'
import classNames from 'classnames'

import './Button.css'

export const Button = ({ children, className, variant, href, target , type}) => {
  const variants = {
    'slides__arrow--left': variant === 'left',
    'slides__arrow--right': variant === 'right',
  }

  if (href) {
    return (
      <a className={className} href={href} target={target}>
        {children}
      </a>
    )
  }

  return (
    <button
      className={classNames(className, {
        ...variants,
      })}
      type={type}
    >
      {children}
    </button>
  )
}
