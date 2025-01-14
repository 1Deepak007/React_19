import React from 'react'
import contextapi_image from '../assets/contextapi_image.webp';
import School from './utils/School';
import { SubjectContext } from './utils/ContextApiData';

const ContextAPI = () => {
    const[subject,setSubject] = React.useState('');
    return (
        <>
            <div className='p-4'>
                <h2 className='text-2xl text-center underline'>ContextAPI</h2>
                <div className='flex mt-4'>
                    <div className="flex flex-col col">
                        <img src={contextapi_image} alt="context api image" className='hover:scale-[200%]'/>
                    </div>
                    <div className="flex flex-col col ms-3">
                        <ul className='list-disc list-inside'>
                            <li>ContextAPI is a way to pass data from parent to child component</li>
                            <li>ContextAPI allows you to share data across components in your application without having to pass props manually through every level of the component tree.</li>
                            <li><b>createContext</b> : It creates a context object that can be used to share data between components.</li>
                            <li><b>useContext</b> : It allows components to access the data provided by the context object.</li>
                            <li><b>Provider</b> : It provides/updates the data to the components that are wrapped inside it.</li>
                            <li><b>Consumer</b> : It allows components to access the data provided by the context object.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* below is our main component */}
            <div style={{background:'purple',padding:'10px',margin:'10px',width:'340px',borderRadius:'10px',boxShadow:'0 2px 4px rgba(0, 0, 0, 0.5)'}}>
                <SubjectContext.Provider value={subject}>
                    <h2 className='text-white mb-2'>Context Api Component</h2>
                    <select onChange={(e)=>setSubject(e.target.value)} value={subject} className='bg-black text-white text-center p-1 w-[40%]'>
                        <option value="English">English</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Science">Science</option>
                        <option value="History">History</option>
                    </select>
                    <button className='bg-red-600 text-white text-center p-1 ms-16 w-[40%]' onClick={()=>setSubject('')}>Clear Subject</button>
                    <School />
                </SubjectContext.Provider>
            </div>
        </>
    )
}

export default ContextAPI
