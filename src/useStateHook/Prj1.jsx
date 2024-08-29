import {useState}from 'react'

const Prj1 = () => {
    const [color, setColor] = useState("false");

  return (
    <>
      <h1>My favorite color is {(color) ? 'blue' : 'red'}!</h1>
      <span onClick={() => setColor(!color)} 
        > 
          {(color) ? <button className='btn btn-danger'>Change Color </button> : <button className='btn btn-primary'>Change Color </button>}
            
        </span>
    </>
  )
}

export default Prj1