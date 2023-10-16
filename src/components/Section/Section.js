import React from 'react'
import classNames from 'classnames'

import './Section.css'

import { Heading, MainHeading, NavBar, Wrapper } from '../index'

export const Section = ({ className, children, headingText, type }) => {
  if (type === 'header') {
    return (
      <header className={className}>
        <Wrapper className={classNames(`wrapper--${className}`)}>
          <NavBar />
          <div className="booking col-lg-12">
            <MainHeading className="booking__title" title={headingText} />
            {children}
          </div>
        </Wrapper>
      </header>
    )
  }

  return (
    <section className={className}>
      <Wrapper className={classNames(`wrapper--${className}`)}>
        <Heading className={classNames(`heading--${className}`)}>
          {headingText}
        </Heading>
        {children}
      </Wrapper>
    </section>
  )
}
