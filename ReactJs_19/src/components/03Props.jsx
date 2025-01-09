import React from 'react'
import User from './utils/user'


const React_Props = () => {
  const username = "Deepak Gautam";
  const gmail = "ds095536@mail.com"

  return (
    <>
        <h2 className='text-center text-2xl underline'>React_Props</h2>
        <User name={username} email={gmail}/>

    </>
  )
}

export default React_Props