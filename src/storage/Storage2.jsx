import {useState} from 'react'

const Storage2 = () => {
    const [data1, setData1] = useState([])

    let arr = [
        {
            name:"nehal",
            age: 20,
            course_name: "MERN Stack"
        },
        {
            name: "aaryan",
            age: 25,
            course_name: "Data Science"
        },
        {
            name:"Vibhav",
            age: 14,
            course_name:"Digital Marketing"
        }
    ]

    const click1 = () => {
        localStorage.setItem("myArr", JSON.stringify(arr))
    }

    const click2 = () => {
        let a = JSON.parse(localStorage.getItem("myArr"))
        console.log(a);
        setData1(a)
    }

  return (
    <div>
        <button onClick={click1} >Get Data</button>
        <button onClick={click2} >Set Data</button>

    {data1.map((e) => {
        return(
            <div className='d-flex justify-content-around'>
            <h1>{e.name}</h1>
            <h1>{e.age}</h1>
            <h1>{e.course_name}</h1>
            <hr/>   
            </div>

        )
    })}
        
    </div>
  )
}

export default Storage2