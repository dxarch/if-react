import React from 'react'

import './Arrow.css'

export const Arrow = ({ className }) => (
  <svg className={className}>
    <use href="#arrow" />
  </svg>
)
