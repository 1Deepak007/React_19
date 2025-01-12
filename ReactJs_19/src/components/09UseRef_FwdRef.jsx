import React, { useRef } from 'react'
import RefChild from './utils/RefChild'

const UseRef_FwdRef = () => {

    //===================> UseRef Hook
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);


    const inputHandler = () => {
        console.log(inputRef1.current.value);
        inputRef1.current.style.color = 'red';
        inputRef1.current.placeholder = 'Enter your name';
    }

    const toggleHandler=()=>{
        if(inputRef2.current.style.display != 'none'){
            inputRef2.current.style.display = 'none';
        }
        else{
            inputRef2.current.style.display = 'inline';
        }
    }

    //===================> Forwarding Ref Hook
    const inptRef = useRef(null);

    const updateInput = () => {
        if(inptRef.current){
            inptRef.current.value = 'Hello';
            inptRef.current.style.color = 'red';
            inptRef.current.focus();
        }
    }

    return (
        <>
        <div className='p-4 m-4 border-2 black'>
            <h1 className='text-center text-2xl underline'>UseRef hook</h1>
            <input ref={inputRef} type="text" placeholder='Enter user name' className='border-2 border-black me-2' />
            <button onClick={() => { inputRef.current.focus() }} className='text-sm bg-blue-300 p-2 rounded-full'>Focus on Input Field</button>

            <br /><br />

            <input ref={inputRef1} type="text" placeholder='Enter name' className='border-2 border-black me-2' />
            <button onClick={inputHandler} className='text-sm bg-blue-300 p-2 rounded-full'>Focus on Input1 Field</button>

            <br /><br />

            <button onClick={toggleHandler} className='text-sm bg-blue-300 p-2 rounded-full'>Toggle Hi</button>   
            <h2 ref={inputRef2} type="text" className='border-2 border-black me-2' >Hii</h2>
        </div>

        <div className='p-4 m-4 border-2 black'>
            <div className="p-2">
                <h1 className='text-center text-2xl underline'>ForwardRef hook</h1>
                <ul style={{listStyleType:'disc'}}> <li>ForwardRef allows you to access the ref of a parent component in child component.</li> <li>Ability to directly pass ref as a prop to functional components.</li> </ul>
            </div>
            <div className="p-2">
                <RefChild ref={inptRef} />
                <button onClick={updateInput} className='text-sm bg-blue-300 p-2 rounded-full'>Update input box</button>
            </div>
        </div>
        </>
    )
}

export default UseRef_FwdRef