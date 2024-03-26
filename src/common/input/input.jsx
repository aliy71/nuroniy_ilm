import React from 'react'

const InputComponent = ({ label = '', clickHandler = () => { }, className = '', inputType = '', icon = '' }) => {
    return (
        <div className='flex items-center content-between w-full px-6 border rounded-md'>
            <input type={inputType} id={inputType} placeholder={label} className={`py-2 outline-none ${className}`} onClick={clickHandler} />
            <label htmlFor={inputType}>{icon}</label>
        </div>
    )
}

export default InputComponent