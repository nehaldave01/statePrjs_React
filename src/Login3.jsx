import React, { useState }  from 'react'
import { MdDelete, MdEdit  } from "react-icons/md";

const Login3 = () => {
    const [data, setData] = useState({name:"",  email: "", number: "", password: "", cpassword: "" });
    const [err,setErr] = useState({});
    const [arr, setArr] = useState([]);
    const [editIndex, setEditIndex] = useState();
    const [update, setUpdate] = useState("Submit");

    // console.log("first", ...arr);
    console.log(data);

  
    let emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    let numRegex =/^(?:\+91|0)?[6-9]\d{9}$/;
    let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  

    const handelchange = (e) => {
       setData({...data, [e.target.name]:e.target.value})
    }
  
    const submithandle = () => {
        
     if(validate()){
        // alert("submited");
        // let a = [...arr]
        // let b = a.concat(data)  //concat ek new arr return karta he 
        // setArr(b)

        if(update==="Update"){
            let copy = [...arr]
            copy[editIndex] = data;
            setArr(copy)
            setUpdate("Submit")
        }else{
          setArr([...arr,data])
        }
        setData({name:"",  email: "", number: "", password: "", cpassword: ""})
     } 

    }

    const deleterow = (index) => {
      //  console.log(index);
       let copy = [...arr];
       copy.splice(index,1);
      setArr(copy);
    }

    const editrow = (e, index) => {
      setEditIndex(index);
      setData(e);
      setUpdate('Update');
    
    }
  
    const validate = () => {
      let localErr = {}
      let status = true;

       if(data.name?.length === 0){
         localErr.name = "(*Name is required)"
         status= false
       }else if(data.name.length < 5){
         localErr.name = "(Field require more than 5 chara)"
         status= false
       }
  
       if(data.email?.length === 0){
        localErr.email = "(*Email is required)"
         status= false

       }else if(!emailRegex.test(data.email)){
        localErr.email = "Invalid Email Address"
         status= false

       }
  
       if(data.number?.length === 0){
         localErr.number = "(Phone Number is required)"
         status= false

       }else if(!numRegex.test(data.number)){
         localErr.number = "Minium 10 digits is required"
         status= false

       }
  
       if(data.password?.length === 0){
        localErr.password = "(Password is required)"
         status= false

       }else if(!passwordRegex.test(data.password)){
        localErr.password = "Incorrect Password"
         status= false

       }
  
       if(data.cpassword?.length === 0){
        localErr.cpassword = "(Please RE-ENTER the password)"
         status= false

       }else if(data.password !== data.cpassword){
        localErr.cpassword = "Not matching from password"
         status= false

       }
  
       setErr(localErr)
       return status
    }
    
    return (
      <div>
      <h1  className='text-center my-3 fw-bold'>Login Form</h1>
        <div className='conatiner w-25  shadow  rounded mx-auto my-1 border border-dark-subtle '>
           <div className='m-4 fw-medium'>
            <label htmlFor="">Name</label><br />
           <input type="text" style={{width: "100%"}} className="form-control my-1" name='name' value={data.name} placeholder='Enter your name' onChange={handelchange}/>
           {err.name && <p style={{color:"red"}}>{err.name}</p>}
           </div>
  
           <div className='m-4 fw-medium'>
           <label htmlFor="">Email</label><br />
           <input type="email" style={{width: "100%"}} className="form-control my-1" name='email' value={data.email} placeholder='Enter your email' onChange={handelchange}/>
           {err.email && <p style={{color:"red"}}>{err.email}</p>}
           </div>
  
           <div className='m-4 fw-medium'>
           <label htmlFor="">Phone Number</label><br />
           <input type="text" style={{width: "100%"}} className="form-control my-1" name='number' value={data.number} placeholder='Enter your phone number' onChange={handelchange}/>
           {err.number && <p style={{color:"red"}}>{err.number}</p>}
           </div>
  
           <div className='m-4 fw-medium'>
           <label htmlFor="">Password</label><br />
           <input type="test" style={{width: "100%"}} className="form-control my-1" name='password' value={data.password} placeholder='Enter your password' onChange={handelchange}/>
           {err.password && <p style={{color:"red"}}>{err.password}</p>}
           </div>
  
           <div className='m-4 fw-medium'>
           <label htmlFor="">Confirm Password</label><br />
           <input type="text" style={{width: "100%"}} class="form-control my-1" name='cpassword' value={data.cpassword} placeholder='Re-enter password' onChange={handelchange}/>
           {err.cpassword && <p style={{color:"red"}}>{err.cpassword}</p>}
           </div>
           
           
           <div className='text-center d-grid col-6 mx-auto'>
           <button className={`btn btn-${update==="Submit"? "warning":"danger"} my-3`} onClick={submithandle}>{update}</button>
           </div>
        </div>
<br />
        
  <table class="table">
    <thead>
    <tr>
      <th scope="col">Serial Number</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Password</th>
      <th scope="col">Confirm Password</th>
      <th scope="col">Status</th>

    </tr>
  </thead>
  <tbody >
    {arr.map((e,i) => {
     return( 
  <tr>
      <th scope="row">{i + 1}</th>
      <td>{e.name}</td>
      <td>{e.email}</td>
      <td>{e.number}</td>
      <td>{e.password}</td>
      <td>{e.cpassword}</td>
      <td ><MdDelete onClick={() => deleterow(i)} /><MdEdit onClick={() => editrow(e,i)}/></td>

    </tr>
    )
    })}
  </tbody>
</table>
</div>
      
    )
}

export default Login3