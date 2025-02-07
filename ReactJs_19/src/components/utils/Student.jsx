import Subject from './Subject'
import React from 'react'

const Student = () => {
  return (
    <div style={{ background: '#0004', padding: '10px', margin: '10px', width: '220px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
      <h1>Student Component</h1>
      <Subject />
    </div>
  )
}

export default Student