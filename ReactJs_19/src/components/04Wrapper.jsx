import React from 'react'
import WrapperComp from './utils/WrapperComp'

const Wrapper = () => {
    return (
        <div className='p-5'>
            <h2 className='text-2xl text-center underline pb-5'>Wrapper Components</h2>
            <WrapperComp>
                <h2>Hello this is how we use wrapper function</h2>
            </WrapperComp>

            <WrapperComp color='orange'>
                <div className='text-center mt-4'>
                    <h3>Hi my name is wrapper</h3>
                </div>
            </WrapperComp>
        </div>
    )
}

export default Wrapper



