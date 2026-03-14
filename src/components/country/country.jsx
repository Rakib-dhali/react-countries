const Country = ({ country }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
      <img
        
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
    <h3>{country.name.common}</h3>
    </div>
  )
}

export default Country