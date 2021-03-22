import styled from 'styled-components'
import BeerChoice from './BeerChoice'

const BeerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  height: 100vh;
  align-items: center;
`

const Button = styled.button`
  margin-bottom: 50px;
`

export default function BeerList({ beers, selectedBeers, setSelectedBeers }) {
  const isChecked = (beer) => selectedBeers.includes(beer)

  const handleCheckBeer = (beer) => {
    const beerChoiceClone = [...selectedBeers]
    if (selectedBeers.includes(beer)) {
      const index = beerChoiceClone.indexOf(beer)
      beerChoiceClone.splice(index, 1)
      setSelectedBeers(beerChoiceClone)
    } else setSelectedBeers([beer, ...selectedBeers])
  }

  const isDisabled = (beer) =>
    selectedBeers.length === 6 && !selectedBeers.includes(beer)

  return (
    <div>
      <Button>filter</Button>
      {selectedBeers.length === 6 && <p>All beers selected!</p>}
      <BeerGrid>
        {beers.map((beer) => {
          return (
            <BeerChoice
              beer={beer}
              key={beer.name}
              isDisabled={isDisabled(beer)}
              isChecked={isChecked(beer)}
              handleCheckBeer={handleCheckBeer}
            />
          )
        })}
      </BeerGrid>
    </div>
  )
}
