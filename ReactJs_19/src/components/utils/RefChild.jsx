import React, { forwardRef } from 'react'


const RefChild = forwardRef((props,ref) => {

    return (
        <div>
            <input type="text" ref={ref} className='border-2 border-black me-4 m-2' />
        </div>
    )
})

export default RefChild
