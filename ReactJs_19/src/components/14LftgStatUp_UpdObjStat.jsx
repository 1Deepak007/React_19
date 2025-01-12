import React, { useState } from 'react'
import AddUser from './utils/AddUser'
import DisplayUser from './utils/DisplayUser'


const LiftingStateUp = () => {
  const [user, setUser] = useState(null)
  const [name, setName] = useState('Deepak')
  const [data, setData] = useState({
    name: 'Sonu',
    address: { city: 'Lucknow', country: 'India' }
  })

  const handleName = () => {
    let tempData = data
    tempData.name = val
    setData({ ...data })
  }


  //--------------------------------------------------------------------------------------

  // const handleNameChange = (val) => {     // this was change don't reflect on UI
  //   data.name = val
  //   console.log(val)
  //   setData({...data})
  //   setData(data)
  //   console.log(data)
  // }
  // console.log(data)

  const handleNameChange=(val)=>{
    data.name = val;
    setData({...data});
  }
  const handleCityChange=(val)=>{
    data.address.city = val;
    setData({...data})
    console.log(data)
  }


  return (
    <>
      <div className='p-5'>
        <h2 className='text-center text-2xl underline'>Lifting state up</h2>
        <p>When we have parent component P. Which have 2 child components C1 and C2, and we want to send a data from C2 in C1, then we have to first send data of C2 to P component and then from P to C1. This is called lifting state up.</p>

        <div className="pt-5 bg-gray-100 mt-5 ps-5">
          <AddUser setUser={setUser} />
          <DisplayUser user={user} />
        </div>
      </div>

      {/* -------------------------------------------------------------------------------------- */}
      
      <div className='p-5'>
        <h2 className='text-center text-2xl underline'>Update Object In State</h2>
        <div className="pt-5 bg-blue-200 mt-5 ps-5 pb-4">
          <span>{name}</span>
          <button onClick={handleName} className="bg-green-400 p-2 ms-5 rounded-full font-bold">Update Name</button>

          <hr className='mt-3 mb-3' />

          <input type="text" onChange={(e) => handleNameChange(e.target.value)} placeholder='update name'/>
          <input type="text" onChange={(e) => handleCityChange(e.target.value)} placeholder='update city'/>
          <h2>Name : {data.name}</h2>
          <h2>City : {data.address.city}</h2>
          <h2>Country : {data.address.country}</h2>
        </div>
      </div>
    </>
  )
}

export default LiftingStateUp