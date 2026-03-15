import { use, useState } from "react";
import Country from "../country/country";
import './Countries.css'

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([])

  const handleVisitedCountries = (country)=>{
    const newVisitedCountry = [...visitedCountries, country]    
    setVisitedCountries(newVisitedCountry)
  }
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (<>
  <h2>visited country {visitedCountries.length}</h2>
    <div className="countries">
      {countries.map((country) => (
        <Country country={country} key={country.ccn3.ccn3} handleVisitedCountries={handleVisitedCountries}/>
      ))}
    </div></>
  );
};

export default Countries;
