import React from 'react'

// const User = ({name,email}) => {      
const User = (props) => {
    return (
        <div>
            {/* <h1>Hello {props.name}</h1>
            Your registered email is : {props.email} */}



            <div className="relative ps-10 pe-72 pt-1 w-[30%]">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3"> Name</th>
                            <th scope="col" className="px-6 py-3"> Email</th>
                            <th scope="col" className="px-6 py-3"> Location</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {props.name}
                            </th>
                            <td className="px-6 py-4">
                                {props.email}
                            </td>
                            <td className="px-6 py-4">
                                {props.userDetails.city +','+props.userDetails.state+','+props.userDetails.country}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default User