import React from 'react'
import ClassComp from './ClassComp'
import Student from './Student'

const School = () => {
  return (
    <div style={{background:'lightblue',padding:'10px',margin:'10px',width:'300px',borderRadius:'10px',boxShadow:'0 2px 4px rgba(0, 0, 0, 0.5)'}}>
        <h2>School Component</h2>
        <ClassComp />
    </div>
  )
}

export default School