import React from "react";
import classNames from "classnames";

import './Card.css';

export const Card = ({ itemType, id, name, city, country, imageUrl }) => {
  const itemTypes = {
    'slides__item': itemType === 'homes',
    'destinations__item': itemType === 'destinations',
  }

  return (
    <figure className={classNames({...itemTypes}, 'flex flex__col col-lg-3 col-sm-3')}>
      <img src={imageUrl} alt={name} className='slides__image'/>
      <figcaption className='slides__caption slides__caption--primary'>{name}</figcaption>
      <p className='slides__caption slides__caption--secondary'>{city}, {country}</p>
    </figure>
  )
}

