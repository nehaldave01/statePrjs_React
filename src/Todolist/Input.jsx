import React, { useRef } from 'react'

const Input = ({itemHandler}) => {

    const inpRef = useRef();

    const changeHandle = () => {
        const newItem = inpRef.current.value
        itemHandler(newItem)
        inpRef.current.value = ''; // Clear input field after adding item
    }

  return (
    <>
     <div className='row'>
        <div className='col-9'>
            <input type="text" className='form-control' ref={inpRef}/>
        </div>
        <div className='col-3'>
            <button className='btn btn-primary' onClick={changeHandle}>Add</button>
        </div>
    </div>   
    </>
  )
}

export default Input