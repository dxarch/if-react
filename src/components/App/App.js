import React, { Component, createRef, Fragment } from 'react'

import './App.css'
import '../../assets/css/fonts.css'
import '../../assets/css/reset.css'

import {
  Gallery,
  Card,
  Sprite,
  BookingForm,
  Downloads,
  Section,
} from '../index'

import { getPopularHomes } from '../../services/popularHomes'
import { getAvailableHomes } from '../../services/availableHomes'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: null,
      popularHomes: [],
    }
    this.searchResultsRef = createRef()

    this.searchHotels = this.searchHotels.bind(this)
  }

  componentDidMount() {
    getPopularHomes().then((homes) => this.setState({ popularHomes: homes }))
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.searchResultsRef.current) {
      this.searchResultsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  searchHotels(query) {
    getAvailableHomes(query).then((homes) =>
      this.setState({ searchResults: homes })
    )
  }

  render() {
    return (
      <>
        <Sprite />
        <Section
          className="top"
          type="header"
          headingText={['Discover stays', 'to live, work or just relax']}
        >
          <div className="booking__block">
            <BookingForm onSearchClick={this.searchHotels} />
            <Downloads className="download" />
          </div>
        </Section>
        {this.state.searchResults && (
          <Section
            className="hotels"
            headingText="Available hotels"
            ref={this.searchResultsRef}
          >
            <p className="hotels__results">
              Hotels found: {this.state.searchResults.length}
            </p>
            <Gallery carouselName="slides__carousel--homes">
              {this.state.searchResults.map((data) => (
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
            {this.state.popularHomes.map((data) => (
              <Fragment key={data.id}>
                <Card itemType="homes" {...data} />
              </Fragment>
            ))}
          </Gallery>
        </Section>
      </>
    )
  }
}
