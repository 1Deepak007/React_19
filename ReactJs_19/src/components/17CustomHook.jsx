import React, { useState } from 'react'
import UseToggleHook from './utils/UseToggleHook'

const CustomHook = () => {

    const[value,toggleValue] = UseToggleHook(false);
    console.log('value : ',value)

    const[data,setData] = useState(true);

    return (
        <div className='p-4'>
            <h2 className='text-2xl text-center underline'>Custom Hook</h2>
            <ul>
                <li>Custom hook is a JavaScript function that allows you to reuse stateful logic across multiple components. </li>
                <li><b>Code reuse:</b> You can encapsulate complex logic in a custom hook and use it across multiple components, avoiding repetition.</li>
                <li><b>Separation of concerns:</b> By extracting logic into custom hooks, you separate the business logic from the UI rendering, making the components cleaner and easier to understand.</li>
                <li><b>Readability and maintainability:</b> Custom hooks help keep components small, focused, and easier to test.</li>
            </ul>

            {
                value ? 
                <h2 className='text-xl mt-5 bg-blue-300 p-2 rounded'>My Custom Hook</h2>
                :
                null
            }
            <div className='mt-4 gap-4 flex'>
                <button className='bg-blue-300 p-2 rounded-full' onClick={()=>toggleValue(false)}>Hide</button>
                <button className='bg-blue-300 p-2 rounded-full' onClick={toggleValue}>Toggle</button>
                <button className='bg-blue-300 p-2 rounded-full' onClick={()=>toggleValue(true)}>Show</button>
            </div>

            {/* ---------------------------------------------------------------------------- */}

            {
                data ? 
                <h2 className='text-xl mt-5 bg-blue-300 p-2 rounded'>Customised Hook</h2>
                :
                null
            }
            <div className='mt-4 gap-4 flex'>
                <button className='bg-blue-300 p-2 rounded-full' onClick={()=>setData(false)}>Hide</button>
                <button className='bg-blue-300 p-2 rounded-full' onClick={()=>setData(!data)}>Toggle</button>
                <button className='bg-blue-300 p-2 rounded-full' onClick={()=>setData(true)}>Show</button>
            </div>
        </div>
    )
}

export default CustomHook