import React from 'react'
import { useId } from 'react'

const UseId_Hook = () => {
    const email = useId();

    return (
        <>
            <h2 className='text-center text-2xl underline'>UseId Hook</h2>
            <div className='m-3 p-2 border-2 border-black'>
                <p>UseId Hook is used to create unique id for each element</p>
                <p>ID : {email}</p>
            </div>

            <div className='m-3 p-2 border-2 border-black'>
                <UserForm />
            </div>
        </>
    )
}

export default UseId_Hook


// UserForm component
function UserForm() {
    // we can generate seperate id for each element using useId hook or we can just generate single id and use it for all elements by adding prefix say names with id
    // const name = useId();
    // const password = useId();
    // const terms = useId();
    // const skills = useId();

    const user = useId();

    return (
        <div className='m-3 p-2 border-2 border-black'>
            <form action="">
                <label htmlFor={user+"name"}>Username</label>
                <input type="text" id={user+"name"} placeholder='enter name' className='ms-3 me-2'/>

                <label htmlFor={user+"password"}>Password</label>
                <input type="text" id={user+"password"} placeholder='enter password' className='ms-3 me-2' />

                <label htmlFor={user+"skills"}>Skills</label>
                <input type="text" id={user+"skills"} placeholder='enter skills' className='ms-3 me-2' />

                <label htmlFor={user+"terms"}>T&C</label>
                <input type="checkbox" id={user+"terms"} className='ms-3' />
            </form>
        </div>
    )
}