import {useRef}from 'react'

const Ref1 = () => {
 
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            email: emailRef.current.value,
            password: passwordRef.current.value
        });
    };
    
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
      <div>
     <label htmlFor="">Email</label>

      <input 
      type="email" 
      id="email"
      ref={emailRef} />
      </div>

      <div>
        <label htmlFor="">Password</label>
        <input 
        type="text" 
        id='password'
        ref={passwordRef}/>
      </div>

      <button >Submit</button>

      </form>
    </div>
  )
}

export default Ref1