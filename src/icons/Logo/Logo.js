import React from 'react'
import classNames from 'classnames'

import './Logo.css'

export const Logo = ({ className, variant }) => {
  const variants = {
    'icon__logo--blue': variant === 'blue',
  }

  return (
    <svg className={classNames(className, variants)}>
      <use href="#logo" />
    </svg>
  )
}
