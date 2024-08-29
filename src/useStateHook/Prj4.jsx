import {useState}from 'react'

const Prj4 = () => {
    const [car, setCar] = useState(
       {
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
        }
       )

       const updateColor = () => {
        setCar({...car, color: "blue"})
       }

  return (
    <>
     <h1>My {car.brand}</h1>
     <p>It is a {car.color} {car.model} from {car.year}</p>

     <button onClick={updateColor} >Blue</button>
    </>
  )
}

export default Prj4