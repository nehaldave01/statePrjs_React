import React, { useState } from 'react'

const Project2 = () => {
    const [data, setdata] = useState(" ")
    const [message, setmessage] = useState("");
    const [alertShow, setalertShow] = useState(false)
    const [color, setcolor] = useState()

    const handlechange = (e) => {
        console.log(e.target.value);
        setdata(e.target.value)
    }


     const click1 = () => {
        setdata(data.toUpperCase())
        setmessage("UpperCase operation completed");
        setalertShow(true)
        setcolor("primary")
     } 

     const click2 = () => {
        setdata(data.toLowerCase())
        setmessage("LowerCase operation completed");
        setalertShow(true)
        setcolor("success")
     } 

     const click3 = () => {
        setdata("")
        setmessage("Clear operation completed");
        setalertShow(true)
        setcolor("danger")
     } 
 
     const click4 = () => {
        navigator.clipboard.writeText(data)
        setmessage("Copy operation completed");
        setalertShow(true)
        setcolor("black")
     } 

     const click5 = () => {
        navigator.clipboard.writeText(data)
        setmessage("Cut operation completed");
        setalertShow(true)
        setcolor("warning")
     } 

     const click6 = () => {
        navigator.clipboard.readText(data).then(a=>setdata(a))
        setmessage("Paste operation completed");
        setalertShow(true)
        setcolor("info")
     } 

     setTimeout(() => {
        setalertShow(false)
    }, 3000)


  return (
        <div className='mx-auto container'>

        {/* {alertShow && color && <div class="alert alert-primary" role="alert">
            {message}
        </div>} */}

        {alertShow && <div className={`alert alert-${color}`} role="alert">
            {message}
        </div>}

        <h1>{data}</h1>
        <input type="text" onChange={handlechange}  style={{width:"500px", height:"30px", margin:"20px"}} value={data}/>
 
      <button className='bg-primary text-white m-1' onClick={click1}>Uppercase</button>

      <button className='bg-success text-white m-1' onClick={click2}>Lowwercase</button>

      <button className='bg-danger text-white m-1' onClick={click3}>Clear Text</button>

      <button className='bg-black text-white m-1' onClick={click4}>Copy Text</button>

      <button className='bg-warning text-white m-1' onClick={click5}>Cut Text</button>

      <button className='bg-info text-white m-1' onClick={click6}>Paste Text</button>




    </div>
  )
}

export default Project2