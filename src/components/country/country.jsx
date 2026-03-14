import './Country.css'

const Country = ({ country }) => {
    console.log(country.population.population, country.area.area);
  return (
    <div className="country">
      <img
        
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
    <h3>{country.name.common}</h3>
    <p>population: {country.population.population}</p>
    <p>are: {country.area.area}</p>
    </div>
  )
}

export default Country