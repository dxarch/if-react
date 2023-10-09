import React, { useState } from "react";

import './BookingForm.css'
import { formLabels } from './config'
import { Button, FormInput, InputContent } from '../index'
import { Search } from '../../icons'

export const BookingForm = ({onSearchClick}) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    const target = e.currentTarget
    setValue({
      ...value,
      [target.id]: target.value,
    })
  }
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearchClick(value.city)
  }

  const [value, setValue] = useState({
    city: 'New York',
    date: {
      'check-in': 'Check-in',
      'check-out': 'Check-out',
    },
    guests: {
      adults: 1,
      children: 0,
      rooms: 1,
    },
  })

  return (
    <>
      <div className="booking__labels">
        {formLabels.map((label, idx) => (
          <label key={idx} htmlFor={label.htmlFor} className="booking__hint">
            {label.title}
          </label>
        ))}
      </div>
      <form action="/" className="booking__form" onSubmit={handleSearchSubmit}>
        <FormInput className="booking__item col-lg-4 col-md-4" inputType="city">
          <Search className="icon__search --hidden" />
          <InputContent
            className="booking__wrap booking__city col-lg-4 col-md-4"
            contentType="city"
            isReadOnly={false}
            inputState={value.city}
            onChange={handleInputChange}
          />
        </FormInput>
        <FormInput className="col-lg-3 col-md-3" inputType="dates">
          <InputContent
            contentType="date"
            isReadOnly={true}
            variant="leveled"
            inputState={value.date}
            onChange={handleInputChange}
          />
        </FormInput>
        <FormInput className="col-lg-3 col-md-3" inputType="guests">
          <InputContent
            contentType="guests"
            isReadOnly={true}
            variant="vertical leveled"
            inputState={value.guests}
            onChange={handleInputChange}
          />
        </FormInput>
        <Button className="booking__button col-lg-2 col-md-2" type="submit">Search</Button>
      </form>
    </>
  )
}
