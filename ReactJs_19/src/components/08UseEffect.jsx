import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Counter from './utils/Counter';

const UseEffectHook = () => {

    const [products, setProducts] = useState([])

    // preventing extra rendering of component on state change
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                res.json
                console.log(res.data)
                setProducts(res.data)
            })
            .catch((err) => { console.log(err) })
    }, []);



    const [counter, setCounter] = useState(0)
    const [num, setNum] = useState(0)
    function callOnce() { console.log('CallOnce called') }
    useEffect(() => { callOnce(); }, [num])               // run on state(num) change
    // useEffect(()=>{callOnce()})    // calls everytime

    const [count, setCount] = useState(0)
    const [display, setdisplay] = useState(true)


    // Component Lifecycle
    useEffect(() => {
        console.log('I will run once when component is mounted');
    }, []);

    useEffect(() => {
        console.log('I will run once when component (count) is updated');
    }, [count]);

    // componentWillUnmount  - unmounting means when the values of component are reset
    useEffect(() => {
        return () => {
            console.log('component is unmounted');
        }
    },[display])

    return (
        <div>
            <h1 className='text-center text-2xl underline'>UseEffectHook</h1>

            <div className='flex flex-wrap '>
                <button onClick={() => setCounter(counter + 1)} className='p-3 bg-blue-400 rounded-full mt-2 hover:text-white' >Counter {counter}</button>
                <button onClick={() => setNum(num + 2)} className='p-3 bg-green-400 rounded-full mt-2 hover:text-white' >Data {num}</button>
            </div>


            <div className='flex flex-wrap justify-center'>
                {products.map((product) => {
                    return (
                        <div className='w-1/6 p-3' key={product.id}>
                            <div className='border rounded-lg shadow-lg p-3'>
                                <img src={product.image} alt={product.title} />
                                <h2 className='text-xl text-center'>{product.title.slice(0, 20)}</h2>
                                <p className='text-center'>₹{product.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>


            <div className='justify-center text-center mt-3'>
            
                    <h2 className='text-xl text-center underline'>Handle SideEffects of component</h2>
                
                <div className="row">
                    <Counter count={count} />
                    <button onClick={() => setCount(count + 1)} className='bg-blue-400 rounded-full mt-2 hover:text-white p-2'>Counter</button>
                </div>
            </div>

            <div className='justify-center text-center mt-3'>
                <h2 className='text-xl text-center underline'>Component Lifecycle</h2>
                {display ? <p>Hello</p> : null}
                <button onClick={() => setdisplay(!display)} className='bg-blue-400 rounded-full mt-2 hover:text-white p-2'>Toggle</button>
            </div>
        </div>
    )
}

export default UseEffectHook

// useEffect(()=>{ 'This code will run on mount'},[])
// useEffect(()=>{ 'This code will run on update'},[state,props])
// useEffect(()=>{ return()=>{'This code will run on unmount'}},[])
// useEffect(()=>{ 'This code will run on every lifecycle event' })