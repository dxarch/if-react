import React, { Fragment, useState } from "react";

import './App.css'
import '../../assets/css/fonts.css'
import '../../assets/css/reset.css'

import {
  Gallery,
  Card,
  Sprite,
  BookingForm,
  Downloads,
  Section
} from "../index";


import { availableHotels, homes } from "./config";

export const App = () => {
  const [searchResults, setSearchResults] = useState();

  const filterHotels = (query) => {
    const results = availableHotels.filter(({name, city, country}) =>
      name.toLowerCase().includes(query) || city.toLowerCase().includes(query) || country.toLowerCase().includes(query)
    )
    setSearchResults(results);
  }

  return (
    <>
      <Sprite />
      <Section className="top" type="header" headingText={['Discover stays', 'to live, work or just relax']}>
        <div className="booking__block">
          <BookingForm onSearchClick={filterHotels}/>
          <Downloads className="download" />
        </div>
      </Section>
      {searchResults && (
        <Section className="hotels" headingText="Available hotels">
          <p className="hotels__results">Hotels found: {searchResults.length}</p>
          <Gallery carouselName="slides__carousel--homes">
            { searchResults.map((data) => (
              <Fragment key={data.id}>
                <Card itemType="homes" {...data} />
              </Fragment>
            ))}
          </Gallery>
        </Section>
      )}
      <Section className="homes" headingText="Homes guests love">
        <Gallery
          slidesName="homes__slides"
          carouselName="slides__carousel--homes"
        >
          {homes.map((data) => (
            <Fragment key={data.id}>
              <Card itemType="homes" {...data} />
            </Fragment>
          ))}
        </Gallery>
      </Section>
    </>
  )
}
