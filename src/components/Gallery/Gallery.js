import React from "react";

import classNames from "classnames";

import { Button } from "../Button";
import { Arrow } from "../../icons";

import './Gallery.css'

export const Gallery = ({slidesName, carouselName, children}) => (
  <div className="relative col-lg-12">
    <div className={classNames('slides', slidesName)}>{children}</div>
    <div className={classNames('slides__carousel', carouselName)}>
      <Button className='slides__arrow' variant='left'>
        <Arrow className='arrow__icon' />
      </Button>
      <Button className='slides__arrow' variant='right'>
        <Arrow className='arrow__icon' />
      </Button>
    </div>
  </div>
);