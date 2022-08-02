import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowCountry from "./components/ShowCountry"

const App = () => {
  const [countries, setCountries] = useState([])
  const [print, setToPrint] = useState([...countries])
  useEffect(() => {
      axios
        .get('https://restcountries.com/v3.1/all')
        .then(({ data }) => {
          setCountries(data)
        }) }, 
  [])

  return (
    <>
      <header>
        Find a country <input onChange={ event => setToPrint(countries.filter(country => country.name.common.toLowerCase().slice(0, event.target.value.length) === event.target.value.toLowerCase())) } />
      </header>
      { print.length === countries.length || print.length <= 0 ?
          <div></div> :
          (print.length === 1 ?
            <ShowCountry country={print[0]} /> :
            (print.length <= 10 ?
              print.map( (country, i) => <div key={i}> {i + 1} - {country.name.common}</div>) :
              <div>Too many matches, specify another filter</div>)) }
    </>
  )
}

export default App;