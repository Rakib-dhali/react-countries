import { use } from "react";
import Country from "../country/country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 400px)",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      {countries.map((country) => (
        <Country country={country} key={country.ccn3.ccn3}/>
      ))}
    </div>
  );
};

export default Countries;
