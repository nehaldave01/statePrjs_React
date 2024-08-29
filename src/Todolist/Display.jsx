import React from 'react'
import { RxCross2 } from "react-icons/rx";

const Display = ({data,setData}) => {

    const removeItem = (index) => {
        let copy = [...data]
       copy.splice(index,1)
       setData(copy)

    }

  return (
    <>
      <div className='row mt-5'>
         <ul className='m-2' style={{padding:"0 !important"}}>
          {/* <li className='m-2 p-2' style={{background:"pink", listStyle:"none"}}>First</li>
            <li className='m-2 p-2' style={{background:"pink", listStyle:"none"}}>Second</li> */}
            {
                data.map(
                    (item,index) => {
                        return <li key={index} className='m-2 p-2' style={{background:"pink", listStyle:"none", position:"relative"}} >{item} 
                        <span style={{position:"absolute", right: "0"}} onClick={ () => removeItem(index)}>
                        <RxCross2 />
                        </span>
                        </li>
                    }
                )
            }
         </ul>
      </div>
    </>
  )
}

export default Display