import { DataArray } from '@mui/icons-material';
import React from 'react'
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom'

const UsFrmStatus = () => {
    const handleSubmit = async () => {
        await new Promise(res => setTimeout(res, 2000));
        console.log('submitted')
    }

    function CustomForm() {
        const { pending } = useFormStatus();   // will return 'true' after form is submitted else 'false'
        console.log(pending)        // Note : keep name oending 

        return (
            <>
                <input type="text" placeholder='enter name' className='border-2 border-black' />
                <input type="password" placeholder='enter password' className='border-2 border-black ms-3 me-3' />
                <button disabled={pending} className='bg-blue-300 p-2 text-green-800 mt-3 font-bold rounded-full'>{pending ? 'Submitting...' : 'Submit'}</button>
            </>
        )
    }

    //----------------------------------------------------------------------

    //  useActionState Hook
    const handleFormSubmit = async (previousData, formData) => {
        let name = formData.get('name');
        let password = formData.get('password')

        await new Promise(res => setTimeout(res, 2000))
        console.log(name, password);
        if (name && password) {
            return { message: 'Data Submitted', name, password }
        } else {
            return { error: 'Failed to submit. Enter proper data', name, password }
        }
    }
    const [data, action, pending] = useActionState(handleFormSubmit, undefined)     // data -> data of inputt fields of form, action -> method to be called on form submittion,  pending -> tells status of form (pending/submitted)
    console.log(data);

    return (
        <>
            <div className='bg-blue-200 p-5'>
                <h2 className='text-2xl text-center underline'>Use Form Status Hook</h2>
                <p className='ms-5 underline text-xl'>Used inside form only</p>
                <form action={handleSubmit} className='m-4'>
                    <CustomForm />
                </form>
            </div>


            <div className='bg-green-200 p-5'>
                <h2 className='text-2xl text-center underline'>Use Action State Hook</h2>
                {
                    data?.error && <span style={{ color: 'red' }} >{data?.error}</span>
                }
                {
                    data?.message && <span style={{ color: 'green' }}>{data?.message}</span>
                }
                <form action={action}>
                    <input type="text" defaultValue={data?.name} name='name' placeholder='enter name' className='block p-2 m-2' />

                    <input type="password" defaultValue={data?.password} name='password' placeholder='enter password' className='block p-2 m-2' />

                    <button disabled={pending} className={pending ? 'p-2 bg-gray-500 text-white rounded-full' : 'bg-green-500 p-3 text-white rounded-full'}>Submit Data</button>  <br />
                </form>

                <h3>Name : {data?.name}</h3>
                <h3>Password : {data?.password}</h3>
            </div>

        </>
    )
}

export default UsFrmStatus