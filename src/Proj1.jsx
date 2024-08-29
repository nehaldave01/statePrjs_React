import { useState } from "react"

const Proj1 = () => {
    const [first, setfirst] = useState({select:""})
    const [err, seterr] = useState({})

    const handleClick = () => {
       abc()
    }
    console.log(first)

    const handlechange = (e) => {
        setfirst({...first,[e.target.name]: e.target.value})
    }

    const abc = ( ) => {
        let a = {}
        if(!first.select){
           a.select = "Please select"
        }
        seterr(a)
    }

  return (
    <div>
  <select  name="select"  class="form-select"onChange={handlechange} aria-label="Default select example">
  <option >Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select><br />
  {err.select && <p>{err.select}</p>}
<button className='btn btn-primary' onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Proj1