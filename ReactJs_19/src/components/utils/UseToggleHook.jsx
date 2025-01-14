import React, { useState } from 'react'


const UseToggleHook = (defaultVal) => {
    const [value, setValue] = useState(defaultVal)
    
    function toggleValue(val) {
        console.log(val)
        if (typeof val != 'boolean') {
            setValue(!value)
        } else {
            setValue(val)
        }
    }
    return [value, toggleValue]
}

export default UseToggleHook
