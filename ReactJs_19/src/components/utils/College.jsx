import React from 'react'

const College = ({CollegeData}) => {
  return (
    <div>
        {/* Nested Looping */}
        <div className='m-[5%] p-2 pb-5'>
                <h2 className='text-center mt-5 text-2xl underline mb-5'>College & Students Data</h2>

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">College Name</th>
                            <th scope="col" className="px-6 py-3">State</th>
                            <th scope="col" className="px-6 py-3">Students</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            CollegeData.map((college, index) =>
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">
                                        {
                                            college.student.map((student, index) =>
                                                <p key={index}>{student.name}</p>
                                            )
                                        }
                                    </td>
                                    <td className="px-6 py-4">{college.state}</td>
                                    <td className="px-6 py-4">{college.college_name}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default College