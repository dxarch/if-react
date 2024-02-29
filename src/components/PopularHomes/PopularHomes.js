import React, { Fragment } from 'react'
import { Card } from '../Card'
import { usePopularHomes } from '../../hooks/usePopularHomes'

export const PopularHomes = () => {
  const { popularHomes } = usePopularHomes()

  return (
    <>
      {popularHomes.map((data) => (
        <Fragment key={data.id}>
          <Card itemType="homes" {...data} />
        </Fragment>
      ))}
    </>
  )
}
