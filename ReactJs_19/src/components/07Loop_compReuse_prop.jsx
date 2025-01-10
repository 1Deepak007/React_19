import React from 'react'
import Person from './utils/Person';
import College from './utils/College';

const Loop_compReuse_prop = () => {
    const tableheads = ['ID', 'NAME', 'EMAIL', 'AGE'];
    const userData = [
        { id: 1, name: 'deepak', age: 20, email: 'ds095536@mail.com' },
        { id: 2, name: 'sonu', age: 21, email: 'sonu@mail.com' },
        { id: 3, name: 'peter', age: 22, email: 'peter@mail.com' },
        { id: 4, name: 'jane', age: 23, email: 'jane@mail.com' }
    ]
    
    const CollegeData=[
        { college_name:'MIT Pune', state:'Maharashtra', student:[{name:'Ishu', age:20, email:'ishu@mail.com'}] },
        { college_name:'NIT Pune', state:'Maharashtra', student:[{name:'Sudeep', age:26, email:'sudeep@mail.com'}] },
        { college_name:'DU', state:'Delhi', student:[{name:'Deepak', age:23, email:'deepak@mail.com'}] },
        { college_name:'IIT Delhi', state:'Delhi', student:[{name:'Ishita', age:21, email:'ishu@mail.com'}] }
    ]

    return (
        <div>
            <h2 className='text-center text-2xl underline'>Looping</h2>

            {/* Looping on Data */}
            <div className="relative overflow-x-auto m-60 mt-4 mb-0">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {
                            tableheads.map((head, index) => {  
                                return(
                                    <th key={index} scope="col" className="px-6 py-3">{head}</th>
                                )                
                            })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((user, index) => {
                                return (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.id}</th>
                                            <td className="px-6 py-4">{user.name}</td>
                                            <td className="px-6 py-4">{user.email}</td>
                                            <td className="px-6 py-4">{user.age}</td>
                                        </>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>



            {/* Looping component */}
            {/* <Person data={{ name: 'deepak', age: 20, email: 'ds095536@mail.com' }} /> */}

            {
                userData.map((user,index) =>
                        <div key={index} className="inline-block mr-4 text-center">
                            <Person data={user} />
                        </div>
                )
            }


            <College CollegeData={CollegeData} />

        </div>
    )
}

export default Loop_compReuse_prop