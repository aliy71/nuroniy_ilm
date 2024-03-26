import React from 'react'

const NoteComponent = ({ label, className }) => {
    return (
        <span className={`absolute rounded-sm translate-x-[-50%] w-[40px] h-[40px] flex items-center justify-center text-2xl ${className}`}>{label}</span>
    )
}

export default NoteComponent