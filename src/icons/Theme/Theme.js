import React from 'react'

import './Theme.css'

export const Theme = ({ className }) => (
  <svg className={className}>
    <use href="#night" />
  </svg>
)
