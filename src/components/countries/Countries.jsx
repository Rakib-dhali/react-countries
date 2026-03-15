import { use, useState } from "react";
import Country from "../country/country";
import './Countries.css'

const Countries = ({ countriesPromise }) => {
  // const [visitedCountries, setVisitedCountries] = useState([])

  const handleVisitedCountries = (country)=>{
    console.log(country);
    
  }
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div className="countries">
      {countries.map((country) => (
        <Country country={country} key={country.ccn3.ccn3} handleVisitedCountries={handleVisitedCountries}/>
      ))}
    </div>
  );
};

export default Countries;
