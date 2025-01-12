import React from 'react'

const PassFxn = ({display_name, name='no name'}) => {

  return (
    <div className='m-4'>
        <h2 className='text-xl'>Child components</h2>
        <button onClick={()=>display_name(name)} className='text-sm bg-blue-300 p-2 rounded-full'>Click here</button>
    </div>
  )
}

export default PassFxn