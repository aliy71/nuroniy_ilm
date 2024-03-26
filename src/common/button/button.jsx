import React from 'react'

const ButtonComponent = ({ label, className, clickHandler, icon, isDisabled = '' }) => {
    return (
        <button className={`w-full py-2 px-2 text-md flex items-center justify-between ${className} ${isDisabled ? "opacity-[50%] cursor-not-allowed" : 'shadow-8xl'}`} onClick={clickHandler} disabled={isDisabled}>
            <span className='text-lg'>{label}</span>
            <span>
                {
                    icon && <>{icon}</>
                }
            </span>
        </button>
    )
}

export default ButtonComponent