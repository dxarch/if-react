import { Section } from '../Section'
import { Gallery } from '../Gallery'
import React, { Fragment } from 'react'
import { Card } from '../Card'
import { useSearchContext } from '../../contexts'

export const Results = () => {
  const { searchResults } = useSearchContext()

  return (
    searchResults && (
      <Section className="hotels" headingText="Available hotels">
        <p className="hotels__results">Hotels found: {searchResults.length}</p>
        <Gallery carouselName="slides__carousel--homes">
          {searchResults.map((data) => (
            <Fragment key={data.id}>
              <Card itemType="homes" {...data} />
            </Fragment>
          ))}
        </Gallery>
      </Section>
    )
  )
}
