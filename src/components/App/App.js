import React from 'react'

import './App.css'
import '../../assets/css/fonts.css'
import '../../assets/css/reset.css'

import { Gallery, Sprite, BookingForm, Downloads, Section } from '../index'

import { PopularHomes } from '../PopularHomes'
import { Results } from '../Results'
import { SearchContextProvider } from '../../contexts'

export const App = () => {
  return (
    <SearchContextProvider>
      <Sprite />
      <Section
        className="top"
        type="header"
        headingText={['Discover stays', 'to live, work or just relax']}
      >
        <div className="booking__block">
          <BookingForm />
          <Downloads className="download" />
        </div>
      </Section>
      <Results />
      <Section className="homes" headingText="Homes guests love">
        <Gallery
          slidesName="homes__slides"
          carouselName="slides__carousel--homes"
        >
          <PopularHomes />
        </Gallery>
      </Section>
    </SearchContextProvider>
  )
}
