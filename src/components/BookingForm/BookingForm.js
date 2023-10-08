import React from 'react'

import './BookingForm.css'
import { formLabels } from './config'
import { Button, FormInput, InputContent } from '../index'
import { Search } from '../../icons'

export const BookingForm = () => {
  return (
    <>
      <div className="booking__labels">
        {formLabels.map((label, idx) => (
          <label key={idx} htmlFor={label.htmlFor} className="booking__hint">
            {label.title}
          </label>
        ))}
      </div>
      <form action="/" className="booking__form">
        <FormInput className="booking__item col-lg-4 col-md-4" inputType="city">
          <Search className="icon__search --hidden" />
          <InputContent
            className="booking__wrap booking__city col-lg-4 col-md-4"
            contentType="city"
            isReadOnly={false}
          />
        </FormInput>
        <FormInput className="col-lg-3 col-md-3" inputType="dates">
          <InputContent
            contentType="date"
            isReadOnly={true}
            variant="leveled"
          />
        </FormInput>
        <FormInput className="col-lg-3 col-md-3" inputType="guests">
          <InputContent
            contentType="guests"
            isReadOnly={true}
            variant="vertical leveled"
          />
        </FormInput>
        <Button className="booking__button col-lg-2 col-md-2">Search</Button>
      </form>
    </>
  )
}
