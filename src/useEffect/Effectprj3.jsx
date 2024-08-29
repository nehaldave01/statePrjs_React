import React, { useState, useEffect } from 'react'

const Effectprj3 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount(count + 1);
        }, 1000);
        
        return () => clearTimeout(timer)
    },[])
  return (
    <>
    <h1>I've rendered {count} times!</h1>;
    </>
  )
}

export default Effectprj3