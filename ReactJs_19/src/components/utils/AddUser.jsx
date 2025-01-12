import React, { useState } from 'react'

const AddUser = ({setUser}) => {


  return (
    <div>
        <h2 className='text-xl underline'>AddUser</h2>
        <input type="text" onChange={(e)=>setUser(e.target.value)} placeholder='enter user to add'  className='m-3'/>
    </div>
  )
}

export default AddUser