import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Eyepass = () => {
    const [status, setStatus] = useState(true)

  return (
    <>
      <div className='container '>
          <div className='shadow rounded mx-auto mt-5' style={{width:"400px", height:"250px"}} >
              <h1 className='text-center p-5'>Enter Password</h1>
              <div className='shadow mx-auto' style={{width:"350px", height:"50px"}}>
                 <input type={(status) ? 'text' : 'password'}  
                 style={{width:"300px", height:"100%", border:"none", outline:"none"}} className='p-2' placeholder='Enter password....'/>
                 
                 <span style={{cursor:"pointer"}} onClick={() => setStatus(!status)} >
                 {(status) ? <FaEye className="text-danger"/> : <FaEyeSlash className="text-success"/>}
                </span>
              </div>
          </div>
      </div>
    </>
  )
}

export default Eyepass