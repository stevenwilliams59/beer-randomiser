import React from 'react'
import styled from 'styled-components'

const Images = styled.img`
  height: 200%;
  width: 20%;
`

export default function BeerChoice({
  beer,
  isChecked,
  handleCheckBeer,
  isDisabled,
}) {
  return (
    <div>
      <Images src={beer.image_url} alt={`${beer.name} logo`}></Images>
      <input
        onChange={() => handleCheckBeer(beer)}
        disabled={isDisabled}
        checked={isChecked}
        type="checkbox"
        id={beer.name}
        name={beer.name}
        value="beer"
      />
      <label htmlFor={beer.name}>{beer.name}</label>
    </div>
  )
}
