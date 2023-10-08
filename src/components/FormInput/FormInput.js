import React, { useState } from "react";
import classNames from 'classnames'

import './FormInput.css'

export const FormInput = ({ className, inputType, children }) => {

  const [isFocused, setIsFocused] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsFocused(current => !current);
  }

  const inputTypes = {
    booking__city: inputType === 'city',
    booking__dates: inputType === 'dates',
    booking__guests: inputType === 'guests',
  }

  return (
    <div className={classNames('booking__wrap', { ...inputTypes }, className, isFocused ? 'focused' : '')} onClick={handleClick}>
      {children}
    </div>
  )
}