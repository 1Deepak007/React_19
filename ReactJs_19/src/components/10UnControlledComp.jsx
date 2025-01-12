import React, { useRef } from 'react'

const UnControlledComp = () => {

    const handleForm = (e) => {
        e.preventDefault();    
        const user = document.getElementById('user').value
        const password = document.getElementById('password').value
        console.log(user,password)
    }


    const userRef = useRef();
    const passwordRef = useRef();
    const handleRefForm = (e) => {
        const user = userRef.current.value;
        const password = passwordRef.current.value;
        console.log(user,password);
        e.preventDefault();
    }


  return (
    <div className='p-4'>
        <h2 className='mt-2 text-2xl text-center underline'>UnControlled Component</h2>
        <p>A Uncontrolled component is one which have input fields and their values are not controlled by react states. When Dom object is manipulated directly by using JS functions like querySelector, getElementById etc. or by useRef.</p>
        

        <h2 className='text-xl mt-10 underline'>UnControlled component with DOM method</h2>
        <form action="" method='post' onSubmit={handleForm} className='mt-4'>
            <input id='user' type="text" placeholder='enter name' className='border-2 ms-2 border-black'/>
            <input id='password' type="password" placeholder='enter password' className='border-2 ms-2 border-black'/>
            <button className='ms-3 bg-blue-300 p-2 text-green-800 text-bold rounded-full'>Submit</button>
        </form>
        
        <h2 className='text-xl mt-10 underline'>UnControlled component with UseRef</h2>
        <form action="" method='post' onSubmit={handleRefForm} className='mt-4'>
            <input ref={userRef} type="text" placeholder='enter name' className='border-2 ms-2 border-black'/>
            <input ref={passwordRef} type="password" placeholder='enter password' className='border-2 ms-2 border-black'/>
            <button className='ms-3 bg-blue-300 p-2 text-green-800 text-bold rounded-full'>Submit With Ref</button>
        </form>

    </div>
  )
}

export default UnControlledComp