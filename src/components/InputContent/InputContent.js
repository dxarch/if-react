import React, { Fragment, useEffect, useState } from "react";

import './InputContent.css'
import classNames from 'classnames'

export const InputContent = ({
  className,
  children,
  contentType,
  variant,
  isReadOnly,
}) => {

  const handleChange = (e) => {
    const target = e.currentTarget;
    setValue({
      ...value,
      [target.id]: target.value
    })
  }

  useEffect(() => console.log(value));

  const [value, setValue] = useState({
    'city': 'New York',
    'date': {
      'check-in': 'Check-in',
      'check-out': 'Check-out',
    },
    'guests': {
      'adults': 1,
      'children': 0,
      'rooms': 1
    }
  })

  const variants = {
    'label__wrap--vertical-line': variant?.includes('vertical'),
    'label__wrap--two-level': variant?.includes('leveled'),
  }

  if (contentType === 'city') {
    return (
      <input
        className={classNames(
          'booking__input',
          `booking__input--${contentType}`
        )}
        id={contentType}
        value={value.city}
        readOnly={isReadOnly}
        onChange={!isReadOnly ? handleChange : null}
      />
    )
  }

  const stateEntries = Object.entries(value[contentType]);

  return (
    <>
      {stateEntries.map(([itemName, itemValue], idx) => (
        <Fragment key={idx}>
          <div
            key={idx}
            className={classNames(
              'booking__item',
              `booking__item--${contentType}`,
              { ...variants },
              className
            )}
          >
            {children}
            {variant ? (
              <label
                htmlFor={itemName}
                className={classNames('label__booking', contentType !== 'guests' ? '--hidden' : null)}
              >
                {itemName.replace(/^./, itemName[0].toUpperCase())}
              </label>
            ) : null}
            <input
              className={classNames(
                'booking__input',
                `booking__input--${contentType === 'guests' ? 'guests' : itemName}`
              )}
              id={itemName}
              value={itemValue}
              readOnly={isReadOnly}
              onChange={!isReadOnly ? handleChange : null}
            />
          </div>
          {idx !== stateEntries.length - 1 ? (
            <span className="dash">—</span>
          ) : null}
        </Fragment>
      ))}
    </>
  )
}