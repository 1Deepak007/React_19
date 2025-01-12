import React, { useContext } from 'react'
import { SubjectContext } from './ContextApiData'

const Subject = () => {

    const subject = useContext(SubjectContext);

  return (
    <div style={{background:'pink',padding:'10px',margin:'10px',width:'180px',borderRadius:'10px',boxShadow:'0 2px 4px rgba(0, 0, 0, 0.5)'}}>
        <h1>Subject Component</h1>
        <h2>Subject : {subject}</h2>
    </div>
  )
}

export default Subject