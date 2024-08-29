import {useState} from 'react'

const Storage1 = () => {
    const [data, setdata] = useState({})

    let a = "this"
    let obj = {
        name: "abc",
        age:51
    }

    const click1 = () => {
        localStorage.setItem("obj",JSON.stringify(obj))
        sessionStorage.setItem("obj", JSON.stringify(obj))
    }

    const click2 = () => {
        let output = JSON.parse(localStorage.getItem("obj"))
        setdata(output)
        console.log(output)
        
    }

  return (
    <div>
        <button onClick={click1}>Set Data</button>
        <button onClick={click2}>Get Data</button>

            <h1>{data.name}</h1>
            <h2>{data.age}</h2>
 
        
    </div>
  )
}

export default Storage1