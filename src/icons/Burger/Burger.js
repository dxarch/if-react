import React from 'react'

import './Burger.css'

export const Burger = ({ className }) => (
  <svg className={className}>
    <use href="#burger" />
  </svg>
)
