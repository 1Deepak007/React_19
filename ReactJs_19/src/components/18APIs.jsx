import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



const APIs = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res.data);
                setdata(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    return (
        <div>
            <h2 className='text-2xl text-center underline'>APIs</h2>
            <div className="p-5">
                <div className='flex flex-wrap mt-5'>
                    {data.map((item, index) => (
                        <div key={index} className="max-w-52 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2" style={{ flex: '0 0 20%' }}>
                            <img className="rounded-t-lg md:h-54 md:w-52" src={item.image} alt="" />
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title.slice(0, 20)}</h5>
                                </a>
                                <span className='flex text-white'>₹ {item.price}</span>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description.slice(0, 50)}</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default APIs