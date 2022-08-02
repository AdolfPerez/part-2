import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShowCountry = ({ country }) => {
  const languages = Object.values( country.languages ? country.languages : ['None'] )
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY
  const [country_Capital, setCountry_Capital] = useState('')
  const [temperature, setTemperature] = useState('')
  const [image, setImage] = useState('')
  const [windDegree, setWindDegree] = useState('')
  const [windDir, setWinDir] = useState('')
  const [windSpeed, setWindSpeed] = useState([])
  useEffect(() => { 
    if(country.capital) {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${REACT_APP_API_KEY}&query=${country.capital[0]}`)
        .then(({ data }) => {
          setCountry_Capital(data.location.name)
          setTemperature(data.current.temperature)
          setImage(data.current.weather_icons[0])
          setWindDegree(data.current.wind_degree)
          setWinDir(data.current.wind_dir)
          setWindSpeed(data.current.wind_speed)
        })
      }
    }, 
  [])

  return (
    <>
      <h1> {country.name.common} </h1>
      <p> Capital { country.capital ? country.capital[0] : 'Does not have' } </p>
      <p> Population {country.population} </p>
      <h2>Spoken languages </h2>
      <ul> { languages.map( language => <li key={language}> {language} </li> ) } </ul>
      <img src={country.flags.png} alt={'flag'} />
      {country.capital ?
      <div>
        <h2>Weather in {country_Capital}</h2>
        <p><b>Temperature:</b> {temperature} Celcius</p>
        <img src={image} alt={'weather'} />
        <p><b>Wind:</b> {`Speed ${windSpeed} mph, Degree ${windDegree}, Direction ${windDir}`}</p>
      </div> :
      <div></div>
      }
    </>
  )
}

export default ShowCountry