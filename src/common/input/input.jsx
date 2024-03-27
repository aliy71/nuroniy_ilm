import React from 'react'

const InputComponent = ({ label = '', clickHandler = () => { }, className = '', inputType = '', icon = '' }) => {
    return (
        <div className='group flex items-center content-between px-6 bg-white/25 rounded-md'>
            <input type={inputType} id={inputType} placeholder={label} className={`py-2 outline-none ${className}`} onClick={clickHandler} />
            <label htmlFor={inputType}>{icon}</label>
        </div>
    )
}

export default InputComponent