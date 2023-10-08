import React, { Fragment } from 'react'

import './App.css'
import '../../assets/css/fonts.css'
import '../../assets/css/reset.css'

import {
  Heading,
  Wrapper,
  Gallery,
  Card,
  Sprite,
  NavBar,
  MainHeading,
  BookingForm, Downloads, Button
} from "../index";

import { homes } from '../../configs/homes'
import { AppStore, GooglePlay } from "../../icons";

export const App = () => {
  return (
    <>
      <Sprite />
      <header className="top">
        <Wrapper className="wrapper--top">
          <NavBar />
          <div className="booking col-lg-12">
            <MainHeading
              className="booking__title"
              title={['Discover stays', 'to live, work or just relax']}
            />
            <div className="booking__block">
              <BookingForm />
              <Downloads className="download">
                <Button className="download__link" href="#" target="_blank">
                  <GooglePlay className="icon__google-play"/>
                </Button>
                <Button className="download__link" href="#" target="_blank">
                  <AppStore className="icon__app-store"/>
                </Button>
              </Downloads>
            </div>
          </div>
        </Wrapper>
      </header>
      <section className="homes">
        <Wrapper className="wrapper--homes">
          <Heading className="heading--homes">Homes guests love</Heading>
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
        </Wrapper>
      </section>
    </>
  )
}
