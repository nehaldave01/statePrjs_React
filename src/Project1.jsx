import React, { useState } from 'react'


const Project1 = () => {
    const[data, setdata] = useState("")

    const handlechange = (e) => {
        console.log(e.target.value);
        setdata(e.target.value)
    }

    // UPPERCASE
    // const click1= () => {
    //     setdata(data.toUpperCase())
    // }

    // Lowercase
    // const click2 = () => {
    //     setdata(data.toLowerCase())
    // }
    
    // Clear Text
    // const clear3 = () => {
    //     setdata("")
    // }

    // Copy Text
    // const copyText = () => {
    //     navigator.clipboard.writeText(data)
    // }

    // Cut Text
    // const cutText = () => {
    //     navigator.clipboard.writeText(data)
    //     setdata("")
    // }

    const pasteText123 = () => {
      navigator.clipboard.readText(data).then(a=>setdata(a))
    }


   
      
  return (
    <div>
        <h1>{data}</h1>
        <input type="text" onChange={handlechange}  style={{width:"500px", height:"30px", margin:"20px"}} value={data}/>
        {/* <button onClick={click1}>Uppercase</button> */}

        {/* <button onClick={click2}>Lowercase</button> */}

        {/* <button onClick={clear3}>Clear Text</button> */}

        {/* <button onClick={copyText}>Copy Text</button> */}

        {/* <button onClick={cutText}>Cut Text</button> */}

        {/* <button onClick={pasteText}>Paste</button> */}
        <button onClick={pasteText123}>Paste</button>

    </div>

  )
}

export default Project1