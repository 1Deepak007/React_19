import React from 'react'
import PassFxn from './utils/PassFxn'


const PassingFxnInComps = () => {

    const displayname = (name) =>{
        alert(`My name ${name}`)
    }

  return (
    <div>
        <h2 className='text-2xl text-center underline'>Parent Component</h2>
        <p>I am parent component. I am passing function to child component. Below i rendered child component.</p>
        <PassFxn display_name={displayname} name='Deepak Gautam'/>
        <PassFxn display_name={displayname} />
    </div>
  )
}

export default PassingFxnInComps