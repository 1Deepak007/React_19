import React from 'react'
import Student from './Student'

const ClassComp = () => {
  return (
    <div>
      <div style={{ background: 'lightgreen', padding: '10px', margin: '10px', width: '260px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
        <h2>Class Component</h2>
        <Student />
      </div>
    </div>
  )
}

export default ClassComp