import React, { useState } from 'react'

const Controlled_comp = () => {

    const[name,setname] = useState('');
    const[password,setpassword] = useState('');
    const[email,setemail] = useState('');

    const handleSubmit=()=>{
        alert(`Name : ${name}.\nEamil : ${email}.\nPassword : ${password}`)
    }


  return (
    <>
        <h2 className='underline text-center text-2xl'>Controlled Components</h2>
        <p className='text-center'>A controlled component is one which have input fields and their values are controlled by react states.</p>

        <div>
            <form action="" method='get'>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='enter name' className='border-2 ms-2 border-black'/>
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='enter password' className='border-2 ms-2 border-black'/>
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='enter email' className='border-2 ms-2 border-black'/>
                <button onClick={handleSubmit} className='bg-blue-300 p-2 text-green-800 text-bold rounded-full'>Submit</button>
                <button onClick={()=>{setname('');setemail('');setpassword('')}} className='bg-red-300 p-2 text-red-800 text-bold rounded-full'>Clear</button>

                <h3 className='mt-5'>{name}</h3>
                <h3 className='mt-1'>{password}</h3>
                <h3 className='mt-1'>{email}</h3>
            </form>
        </div>

    </>
  )
}

export default Controlled_comp