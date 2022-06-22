import React, { CSSProperties, useState } from 'react'
import './Switch.css'

type switchProps = {
    onClick: Function,
}

const Switch = (props: switchProps) => {
    const bgColorNormal = '#e0f6ff'
    const bgColorAlt = '#f584a8'
    const hoverColorPrimary = '#66d4ff'
    const hoverColorAlt = '#f04279'

    const [active, setActive] = useState<Boolean>(false)
    const [leftMargin, setLeftMargin] = useState<string | number | undefined>('1px')
    const [bgColor, setBgColor] = useState<any | undefined> (bgColorNormal)

    const triggerStyles: CSSProperties = {
        marginLeft: leftMargin,
        backgroundColor: bgColor,
    }

    const handleClick = () => {
        setActive(!active)
        if (!active) {
            setLeftMargin ('50px')
            setBgColor (bgColorAlt)
        }
        if (active) {
            setLeftMargin ('1px')
            setBgColor (bgColorNormal)
        }
        props.onClick()
    }

    const handleMouseEnter = () => {
        if (!active) {
            setBgColor (hoverColorPrimary)
        }
        if (active) {
            setBgColor (hoverColorAlt)
        }
    }

    const handleOnMouseLeave = () => {
        if (!active) {
            setBgColor (bgColorNormal)
        }
        if (active) {
            setBgColor (bgColorNormal)
        }
    }

    return (
        <div className={`switchWrapper ${active ? 'switchWrapper-alt' : null}`}>
            <div className='switchTrigger' style={triggerStyles} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleOnMouseLeave}/>
        </div>
    )
}

export default Switch