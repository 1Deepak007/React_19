import React from 'react'

const Person = ({data}) => {
    console.log(data)
  return (
    <div style={{ 
        background: 'lightblue',
        padding: '10px',
        margin: '10px',
        width: '300px',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    }}>
            <h2 className='text-xl'>ID : {data.id}</h2>
            <h2 className='text-xl'>Name : {data.name}</h2>
            <h2 className='text-xl'>Email : {data.email}</h2>
            <h2 className='text-xl'>Age : {data.age}</h2>
    </div>
  )
}

export default Person
