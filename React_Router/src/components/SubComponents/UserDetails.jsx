import React from 'react'
import { useParams } from 'react-router' // Use 'react-router-dom' for 'useParams'

const UserDetails = () => {
    const { id, name } = useParams(); 


    const userData = [
        { id: 1, name: 'Deepak' }, { id: 2, name: 'Ishita' }, { id: 3, name: 'Sonu' },
        { id: 4, name: 'Rohit' }, { id: 5, name: 'Sudeep' }, { id: 6, name: 'Monu' }
    ];

    // Find the user by the ID
    const user = userData.find(user => user.id === parseInt(id));

    if (!user) {
        return <div>User not found</div>; // Handle if user is not found
    }

    return (
        <div>
            <h2 className="text-center text-2xl underline">User Details</h2>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                    </tr>
                </tbody>
            </table>


            <hr />

            <h2 className='text-center text-xl '>Dynamic User Details from params</h2>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default UserDetails
