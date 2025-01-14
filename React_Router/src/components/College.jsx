import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'

const College = () => {
    return (
        <>
            <h2 className='text-3xl text-center underline'>College</h2>
            <div className='gap-4 p-2 mb-0 m-2 bg-black'>
                {/* Nested Routing */}
                <div className='text-center space-x-4 ms-4'>
                    <NavLink to={'/college/student'} className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>Student</NavLink>
                    <NavLink to={'/college/department'} className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>Departments</NavLink>
                    <NavLink to={'/college/collegedetails'} className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>CollegeDetails</NavLink>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'} >Home</NavLink>
                </div>


                {/* <div className='flex justify-end w-full me-4'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-blue-900' : ''} >Home</NavLink>
                </div> */}
            </div>
            <div className='flex gap-4 p-3 pt-1 mt-0'>
                <Outlet />
            </div>
        </>
    )
}

export default College
