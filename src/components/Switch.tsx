import React, { useState } from 'react'
import './Switch.css'

type switchProps = {
    onClick: Function,
}

const Switch = (props: switchProps) => {
   let hoverColor : '#99e2ff'
   let hoverColorAlt: '#f04279'

    const [active, setActive] = useState<Boolean>(false)

    const handleClick = () => {
        setActive(!active)
        props.onClick()
    }

    return (
        <div className={`switchWrapper ${active ? 'switchWrapper-alt' : null}`}>
            <div className='switchTrigger' onClick={handleClick} style={active === true ? { left: '50px' } : undefined} />
        </div>
    )
}

export default Switch