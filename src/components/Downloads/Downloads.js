import React, { Fragment } from 'react'

import './Downloads.css'
import { downloadLinks } from './config'
import { Button } from '../Button'
import { AppStore, GooglePlay } from '../../icons'

export const Downloads = ({ className }) => {
  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'google-play':
        return <GooglePlay className="icon__google-play" />
      case 'app-store':
        return <AppStore className="icon__app-store" />
    }
  }

  return (
    <div className={className}>
      {downloadLinks.map((link, idx) => (
        <Fragment key={idx}>
          <Button className="download__link" href={link.href} target="_blank">
            {renderIcon(link.type)}
          </Button>
        </Fragment>
      ))}
    </div>
  )
}
