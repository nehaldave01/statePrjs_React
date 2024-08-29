import {useState}from 'react'

const Prj3 = () => {
    const [car, setcar] = useState(
        {
            brand : "Ford",
            model : "Mustang",
            year : "1964",
            color : "red"
        }
    )
  return (
    <>
      <h1>My{car.brand}</h1>
      <p>
        It is a {car.color} {car.model} bought in {car.year}.
      </p>
    </>
  )
}

export default Prj3