import Home from './components/Home'
import BeerList from './components/BeerList'
import { Router } from '@reach/router'
import { useState, useEffect } from 'react'
import * as api from './components/api'

function App() {
  const [beers, setBeers] = useState([])
  const [selectedBeers, setSelectedBeers] = useState([])

  useEffect(() => {
    api.getBeers.then((beer) => {
      setBeers(beer)
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Home path="/" beers={beers} />
        <BeerList
          path="/beers"
          beers={beers}
          selectedBeers={selectedBeers}
          setSelectedBeers={setSelectedBeers}
        />
      </Router>
    </div>
  )
}

export default App
