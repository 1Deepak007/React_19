import React, { useState, useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Func_UseMemo = () => {
    console.log('component rendered');

    function func() {
        toast("Wow so easy!");
    }

    const [count, setCount] = useState(0);  // State for count (preserved by React)
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(null);  // Memoize sum calculation

    const calcSum = useMemo(() => {
        console.log('Calculating sum...');
        return num1 + num2;
    }, [num1, num2]);

    const handleGetSum=()=>{
        setSum(calcSum);
    }


    return (
        <>
            <ToastContainer />
            <h1 className='text-center text-2xl underline'>Functions</h1>
            <button onClick={func} className='p-3 bg-blue-400 rounded-full mt-2 hover:text-white'>Hello</button>




            {sum === null ? (
                null
            ) : (
                <p>Sum: {sum}</p>
            )}
            <div className="row">
                <input onChange={(e) => setNum1(Number(e.target.value))} value={num1} type='number' placeholder='enter a number' className='border-2 border-black ms-3' />
            </div>
            <div className="row mt-3">
                <input onChange={(e) => setNum2(Number(e.target.value))} value={num2} type='number' placeholder='enter a number' className='border-2 border-black ms-3' />
            </div>
            <button onClick={handleGetSum} className='bg-blue-500 p-3 text-white rounded-2xl mt-3'>Get Sum</button>




            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>Value: {count}</h1>
                <button onClick={() => setCount(count + 1)} style={{ backgroundColor: 'blue', color: 'white', margin: '5px', padding: '10px', fontSize: '16px' }}>+</button>
                <button onClick={() => setCount(count - 1)} style={{ backgroundColor: 'blue', color: 'white', margin: '5px', padding: '10px', fontSize: '16px' }}>-</button>
            </div>
        </>
    );
};

export default Func_UseMemo;

