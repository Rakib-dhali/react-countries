import { useState } from 'react'
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false)
    const handleClick  = () => {
        setVisited(!visited)
        handleVisitedCountries(country)
    }
  return (
    <div className="country">
      <img
        
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
    <h3>{country.name.common}</h3>
    <p>population: {country.population.population}</p>
    <p>area: {country.area.area} {country.area.area > 147570? "big country": "small country" }</p>
    <button className={`${visited===true? "green": "ash"}`} onClick={handleClick}>{visited===true? "visited": "not applied"}</button>
    <button onClick={() => handleVisitedFlag(country.flags.flags.png)}>add visitedFlag</button>
    </div>
  )
}

export default Country 