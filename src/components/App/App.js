import React, { Fragment } from "react";

import './App.css'
import '../../assets/css/fonts.css'
import '../../assets/css/reset.css'
import { Heading } from "../Heading";
import { Wrapper } from "../Wrapper";
import { Gallery } from "../Gallery";
import { homes } from "../../configs/homes";
import { Card } from "../Card";
import { Sprite } from "../Sprite";

export const App = () => {
  return (
    <>
      <Sprite />
      <section className="homes">
        <Wrapper className='wrapper--homes'>
          <Heading className='heading--homes'>Homes guests love</Heading>
          <Gallery slidesName='homes__slides' carouselName='slides__carousel--homes'>
            { homes.map((data) => (
              <Fragment key={data.id}>
                <Card itemType='homes' {...data}/>
              </Fragment>
            )) }
          </Gallery>
        </Wrapper>
      </section>
    </>
  )
}

