import React, { useState } from 'react'
import Display from './Display'
import Input from './Input'

const Todo = () => {
    const [data, setData] = useState([])

    const addItem = (item) => {
        // setData(item) 
        setData([...data,item])
    }

  return (
    <div className='container'>
        <Input
        itemHandler={addItem}
        />

        <Display 
        data= {data}
        setData={setData}
        />
    </div>
  )
}

export default Todo