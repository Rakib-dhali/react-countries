import { use } from "react"


const Countries = ({messege}) => {
    const countriesData = use(messege)
    const countries = countriesData.countries
    console.log(countries);
  return (
    <div>
        
    </div>
  )
}

export default Countries