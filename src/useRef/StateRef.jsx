import {useState}from 'react'

const StateRef = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({email,password})
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
      <div>
     <label htmlFor="">Email</label>
      <input 
      type="email" 
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
       />
      </div>

      <div>
        <label htmlFor="">Password</label>
        <input 
        type="text" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />
      </div>

      <button >Submit</button>

      </form>
    </div>
  )
}

export default StateRef