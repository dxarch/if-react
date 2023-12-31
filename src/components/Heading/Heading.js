import React from 'react'

import classNames from 'classnames'

import './Heading.css'
export const Heading = ({ className, children }) => (
  <h2 className={classNames('heading', className)}>{children}</h2>
)
