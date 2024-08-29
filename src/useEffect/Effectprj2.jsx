import React, { useEffect, useState } from 'react'

const Effectprj2 = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0)
 
    useEffect(() => {
            setCalculation(count * 2)  
    },[count])    

  return (
    <>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  )
}

export default Effectprj2