import React from 'react'

const Fruit = ({fruit = 'No fruit found'}) => {
  return (
    <div className='text-center'>
        <h2 className='text-xl text-center underline'>Favourate fruit</h2>
        <p>My Favourate fruit is {fruit}</p>
    </div>
  )
}

export default Fruit