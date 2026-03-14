import { Suspense } from "react"
import Countries from "./components/countries/Countries"
import "./App.css"

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())
  

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>nadir bhai loading</p>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </div>
  )
}

export default App