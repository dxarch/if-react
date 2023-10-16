import React from 'react'

import { Logo } from '../../icons'
import { UList } from '../UList'

import './NavBar.css'

import { icons, links } from './config'

export const NavBar = () => (
  <nav className="flex nav col-lg-12">
    <Logo className="icon__logo" variant="blue" />
    <div className="flex nav__menu">
      <UList className="flex nav__links" items={links} linkType="nav" />
      <UList className="flex nav__links nav__links--icons" items={icons} />
    </div>
  </nav>
)
