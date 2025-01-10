import React, { useEffect, useState } from 'react'

const Clock = () => {

    const[color,setColor] = useState('orange');
    const[time,setTime] = useState(0);

    useEffect(()=>
        {
        setInterval(
            ()=>setTime(new Date().toLocaleTimeString())
        ,1000)
    },[]);

  return (
    <div>
        <h2 className='text-xl text-center underline'>Clock</h2>

        <select onChange={(e)=>setColor(e.target.value)} className='bg-black text-white text-center p-1 w-[10%]'>
            <option className='text-orange-600'>Select</option>
            <option value={'red'} className='text-red-600'>Red</option>
            <option value={'blue'} className='text-blue-600'>Blue</option>
            <option value='green' className='text-green-600'>Green</option>
            <option value='yellow' className='text-yellow-600'>Yellow</option>
        </select>

        <div className='bg-black ms-[42%] me-[42%] p-3'>
            <h1 className='text-2xl text-center' style={{color:color}}>{time}</h1>
        </div>
    </div>
  )
}

export default Clock