import React from 'react'
import { Link } from 'react-router'

const User = () => {
    const userData = [
        { id: 1, name: 'Deepak' }, { id: 2, name: 'Ishita' }, { id: 3, name: 'Sonu' },
        { id: 4, name: 'Rohit' }, { id: 5, name: 'Sudeep' }, { id: 6, name: 'Monu' }
    ]

    return (
        <div className="mt-0 m-2">
            <div className="p-4">
                <h1 className="text-2xl underline text-center">User Details</h1>
                <ul>
                    {
                        userData.map((item, index) => (
                            <li key={index} className="list-disc">
                                {/* sending id */}
                                <Link to={`/user/${item.id}`} className="text-blue-500">
                                    Send id : {item.name}
                                </Link>
                                {/* sending id and name both */}
                                <Link to={`/user/${item.id}/${item.name}`} className="text-blue-500 ms-5">
                                    Send id and name both : {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default User
