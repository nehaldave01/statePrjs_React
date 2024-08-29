import { useState } from "react"
    
//     const State= () => {
//         const [data1, setdata1] = useState(1)
//         const [data2, setdata2] = useState(100)


//     const click1 = () => {
//         setdata1(data1 + 1)
//         setdata2(data2 - 1)
//     }

//   return (
//     <div>

//      <h1>{data1}</h1>
//      <button onClick={click1}>Click Me</button>
//      <h1>{data2}</h1>


//     </div>
//   )
// }
/////////////////////////////////////////////////////

const State = () => {

    const [data, setdata] = useState(1)

    const inc = () => {
        setdata(data + 1)
    }

    const dec = () => {
        setdata(data - 1)
    }

    return(
        <>
        <button onClick={inc}>Increase</button>
        <h1>{data}</h1>
        <button onClick={dec}>Decrease</button>

        </>
    )
} 


export default State