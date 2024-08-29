import React, { useState }  from 'react'

const Login = () => {
  const [data, setData] = useState({name:"",  email: "", number: "", password: "", cpassword: "" });
  const [err,setErr] = useState({});
  console.log(data);

  let emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  let numRegex =/^(?:\+91|0)?[6-9]\d{9}$/;
  let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  

  const handelchange = (e) => {
     setData({...data, [e.target.name]:e.target.value})
  }

  const submithandle = () => {
   validate()
  }

  const validate = () => {
    let localErr = {}

     if(data.name?.length === 0){
       localErr.name = "(*Name is required)"
     }else if(data.name.length < 5){
       localErr.name = "(Field require more than 5 chara)"
     }

     if(data.email?.length === 0){
      localErr.email = "(*Email is required)"
     }else if(!emailRegex.test(data.email)){
      localErr.email = "Invalid Email Address"
     }

     if(data.number?.length === 0){
       localErr.number = "(Phone Number is required)"
     }else if(!numRegex.test(data.number)){
       localErr.number = "Minium 10 digits is required"
     }

     if(data.password?.length === 0){
      localErr.password = "(Password is required)"
     }else if(!passwordRegex.test(data.password)){
      localErr.password = "Incorrect Password"
     }

     if(data.cpassword?.length === 0){
      localErr.cpassword = "(Please RE-ENTER the password)"
     }else if(data.password !== data.cpassword){
      localErr.cpassword = "Not matching from password"
     }

     setErr(localErr)
  }
  
  return (
    <div>
    <h1  className='text-center my-3 fw-bold'>Login Form</h1>
      <div className='conatiner w-25  shadow  rounded mx-auto my-1 border border-dark-subtle '>
         <div className='m-4 fw-medium'>
          <label htmlFor="">Name</label><br />
         <input type="text" style={{width: "100%"}} className="form-control my-1" name='name' placeholder='Enter your name' onChange={handelchange}/>
         {err.name && <p style={{color:"red"}}>{err.name}</p>}
         </div>

         <div className='m-4 fw-medium'>
         <label htmlFor="">Email</label><br />
         <input type="email" style={{width: "100%"}} className="form-control my-1" name='email' placeholder='Enter your email' onChange={handelchange}/>
         {err.email && <p style={{color:"red"}}>{err.email}</p>}
         </div>

         <div className='m-4 fw-medium'>
         <label htmlFor="">Phone Number</label><br />
         <input type="text" style={{width: "100%"}} className="form-control my-1" name='number' placeholder='Enter your phone number' onChange={handelchange}/>
         {err.number && <p style={{color:"red"}}>{err.number}</p>}
         </div>

         <div className='m-4 fw-medium'>
         <label htmlFor="">Password</label><br />
         <input type="password" style={{width: "100%"}} className="form-control my-1" name='password' placeholder='Enter your password' onChange={handelchange}/>
         {err.password && <p style={{color:"red"}}>{err.password}</p>}
         </div>

         <div className='m-4 fw-medium'>
         <label htmlFor="">Confirm Password</label><br />
         <input type="password" style={{width: "100%"}} class="form-control my-1" name='cpassword' placeholder='Re-enter password' onChange={handelchange}/>
         {err.cpassword && <p style={{color:"red"}}>{err.cpassword}</p>}
         </div>
         
         
         <div className='text-center d-grid col-6 mx-auto'>
         <button className='btn btn-warning my-3' onClick={submithandle}>Submit</button>
         </div>
      </div>
    </div>
    
  )
}

export default Login