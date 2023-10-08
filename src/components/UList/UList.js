import React from 'react'
import classNames from 'classnames'

import { Account, Burger, Theme } from "../../icons";

import './UList.css'

const renderItem = (item, linkType, iconType) => {
  const linkTypes = {
    footer__link: linkType === 'footer',
    nav__link: linkType === 'nav',
  }

  const iconTypes = new Map()
  iconTypes.set(
    iconType === 'theme',
    <Theme className="nav__icon nav__icon--night" />
  )
  iconTypes.set(
    iconType === 'account',
    <Account className="nav__icon nav__icon--account" />
  )
  iconTypes.set(
    iconType === 'burger',
    <Burger className="nav__icon nav__icon--burger --hidden"/>
  )

  if (linkType) {
    return (
      <a href={item.href} className={classNames({ ...linkTypes })}>
        {item.title}
      </a>
    )
  } else if (iconType) {
    return <a href="#">{iconTypes.get(true)}</a>
  } else {
    return item
  }
}
export const UList = ({ className, items, linkType }) => (
  <ul className={className}>
    {items.map((item, idx) => (
      <li key={idx}>{renderItem(item, linkType, item.iconType)}</li>
    ))}
  </ul>
)
