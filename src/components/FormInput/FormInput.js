import React from 'react'
import classNames from 'classnames'

import './FormInput.css'

export const FormInput = ({
  className,
  inputType,
  onSelect,
  isFocused,
  children,
}) => {
  const inputTypes = {
    booking__city: inputType === 'city',
    booking__dates: inputType === 'dates',
    booking__guests: inputType === 'guests',
  }

  const handleSelect = () => {
    onSelect(inputType)
  }

  return (
    <div
      className={classNames(
        'booking__wrap',
        { ...inputTypes },
        className,
        isFocused && 'focused'
      )}
      onClick={handleSelect}
    >
      {children}
    </div>
  )
}
