import React from 'react'

const Filter = ({categories}) => {
  return (
    <div className='col-3 p-3'>
        <h2 className='text-center'>Filter</h2>
        <div className='shadow p-3'>
          {
            categories.map(
                (categ, i) => {
                return <p key={i}>{categ}</p>
                }
            )
          }
          </div>
    </div>
  )
}

export default Filter