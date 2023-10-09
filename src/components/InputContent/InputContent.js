import React, { Fragment } from 'react'

import './InputContent.css'
import classNames from 'classnames'

export const InputContent = ({
  className,
  children,
  contentType,
  variant,
  isReadOnly,
  inputState,
  onChange
}) => {

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
        value={inputState}
        readOnly={isReadOnly}
        onChange={!isReadOnly ? onChange : null}
      />
    )
  }

  const stateEntries = Object.entries(inputState)

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
            {variant && (
              <label
                htmlFor={itemName}
                className={classNames(
                  'label__booking',
                  contentType !== 'guests' ? '--hidden' : null
                )}
              >
                {itemName.replace(/^./, itemName[0].toUpperCase())}
              </label>
            )}
            <input
              className={classNames(
                'booking__input',
                `booking__input--${
                  contentType === 'guests' ? 'guests' : itemName
                }`
              )}
              id={itemName}
              value={itemValue}
              readOnly={isReadOnly}
              onChange={!isReadOnly ? onChange : null}
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
