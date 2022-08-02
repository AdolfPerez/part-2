const ShowCountry = ({ country }) => {
  const languages = Object.values( country.languages ? country.languages : ['None'] )

  return (
    <>
      <h1> {country.name.common} </h1>
      <p> Capital { country.capital ? country.capital[0] : 'Does not have' } </p>
      <p> Population {country.population} </p>
      <h2> languages </h2>
      <ul> { languages.map( language => <li key={language}> {language} </li> ) } </ul>
      <img src={country.flags.png} alt={'flag'} />
    </>
  )
}

export default ShowCountry