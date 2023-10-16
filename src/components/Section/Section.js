import React, { forwardRef } from 'react'
import classNames from 'classnames'

import './Section.css'

import { Heading, MainHeading, NavBar, Wrapper } from '../index'

// eslint-disable-next-line react/display-name
export const Section = forwardRef(
  ({ className, children, headingText, type }, ref) => {
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
)
