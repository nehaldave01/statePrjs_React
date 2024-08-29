import { useState, useEffect  } from "react"

const Effectprj1 = () => {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count+1);
    //     },1000);
    // })

    useEffect(() => {
        setTimeout(() => {
            setCount(count+1);
        },1000);
    },[])

  return (
    <div>
        <h1>I've rendered {count} times!</h1>
    </div>
  )
}

export default Effectprj1