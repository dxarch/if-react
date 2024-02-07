import React, { useEffect, useState } from 'react'

import './BookingForm.css'
import { formLabels } from './config'
import { Button, FormInput, InputContent } from '../index'
import { Search } from '../../icons'
import { useHotelsSearch } from '../../hooks'
import { useSearchContext } from '../../contexts'

import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import 'react-day-picker/dist/style.css'
import './DayPicker.css'

export const BookingForm = () => {
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
  const [range, setRange] = useState()
  const [focusedInput, setFocusedInput] = useState(null)
  const { searchHotels } = useHotelsSearch()
  const { setSearchResults } = useSearchContext()

  useEffect(() => {
    if (range?.from) {
      const from = format(range?.from, 'dd.MM.yyyy')
      let to
      if (!range.to) {
        to = 'Check-out'
      } else {
        to = format(range?.to, 'dd.MM.yyyy')
      }

      const date = {
        'check-in': from,
        'check-out': to,
      }

      setValue({
        ...value,
        date,
      })
    }
  }, [range])

  const handleInputChange = (e) => {
    e.preventDefault()
    const target = e.currentTarget
    setValue({
      ...value,
      [target.id]: target.value,
    })
  }

  const handleInputFocus = (id) => {
    setFocusedInput(id)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    searchHotels(value.city).then((result) => setSearchResults(result))
  }

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
        <FormInput
          className="booking__item col-lg-4 col-md-4"
          inputType="city"
          onSelect={handleInputFocus}
          isFocused={focusedInput === 'city'}
        >
          <Search className="icon__search --hidden" />
          <InputContent
            className="booking__wrap booking__city col-lg-4 col-md-4"
            contentType="city"
            isReadOnly={false}
            inputState={value.city}
            onChange={handleInputChange}
          />
        </FormInput>
        <FormInput
          className="col-lg-3 col-md-3"
          inputType="dates"
          onSelect={handleInputFocus}
          isFocused={focusedInput === 'dates'}
        >
          <InputContent
            contentType="date"
            isReadOnly={true}
            variant="leveled"
            inputState={value.date}
            onChange={handleInputChange}
          />
          <DayPicker
            id="calendar"
            numberOfMonths={2}
            weekStartsOn={1}
            fromDate={new Date()}
            mode="range"
            selected={range}
            onSelect={setRange}
          />
        </FormInput>
        <FormInput
          className="col-lg-3 col-md-3"
          inputType="guests"
          onSelect={handleInputFocus}
          isFocused={focusedInput === 'guests'}
        >
          <InputContent
            contentType="guests"
            isReadOnly={true}
            variant="vertical leveled"
            inputState={value.guests}
            onChange={handleInputChange}
          />
        </FormInput>
        <Button className="booking__button col-lg-2 col-md-2" type="submit">
          Search
        </Button>
      </form>
    </>
  )
}
