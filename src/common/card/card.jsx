import { IoBagAdd, IoStarSharp } from "react-icons/io5";
import { GiCrownCoin } from "react-icons/gi";
import { CiBookmarkMinus, CiBookmarkPlus } from "react-icons/ci";
import React, { useState } from 'react'
import ButtonComponent from '../button/button'
import NoteComponent from "../note/noteComponent";

const CardComponent = ({ product }) => {
    const [count, setCount] = useState(0)
    const decrementHandle = () => {
        count > 0 && setCount(prev => prev -= 1)
    }
    const incrementHandle = () => {
        setCount(prev => prev += 1)
    }
    const price = 35
    return (
        <div className='relative max-w-[350px] w-full min-w-[180px] p-2 border border-gray-500/50 rounded-md bg-white/15 overflow-hidden'>
            {
                count > 0 && (
                    <NoteComponent label={count} className={'text-white bg-green-600 top-[0] right-[-20px]'} />
                )
            }
            <div className='w-full h-[180px] rounded-md overflow-hidden'>
                <img src="https://imgs.search.brave.com/ZBKOJMPrJgmNg3ILB2hO-_Zsq5v32KsrtmqfqLT-7To/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/MS8xOS8yMS8xMS9h/dGxhcy0xMDUyMDEx/XzY0MC5qcGc" alt="image" loading="lazy" className='w-full h-full object-cover' />
            </div>
            <div className=''>
                <div className='flex justify-between items-center my-2'>
                    <h3 className='font-bold text-2xl'>Title Name</h3>
                    <p className="flex gap-1 items-center">
                        <span>
                            {price.toLocaleString('uz-UZ', {
                                style: 'currency',
                                currency: 'SUM',
                                currencyDisplay: "code"
                            })}
                        </span>
                        <span>
                            <GiCrownCoin className="text-xl text-yellow-500" />
                        </span>
                    </p>
                </div>
                <p className='my-2 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, animi? Dolor sapiente maiores eius optio.</p>
                <div className="flex items-center justify-between gap-2 my-2">
                    <ButtonComponent label={'ayirish'} clickHandler={decrementHandle} className={`text-white bg-red-600/95 rounded-md capitalize space-x-2 hover:bg-red-600 transition-all ${!count && 'hidden'} shadow-red-600`} icon={<CiBookmarkMinus className="text-3xl" />} isDisabled={count === 0} />
                    <ButtonComponent label={'qo\'shish'} clickHandler={incrementHandle} className={'text-white bg-blue-600/95 rounded-md capitalize space-x-2 hover:bg-blue-600 transition-all shadow-blue-600'} icon={<CiBookmarkPlus className="text-3xl" />} />
                </div>
                <ButtonComponent label={'add to cart'} clickHandler={() => { }} className={`text-white bg-green-600 rounded-md capitalize space-x-2 shadow-green-600`} icon={<IoBagAdd className="text-3xl" />} isDisabled={count === 0} />
            </div>
        </div>
    )
}

export default CardComponent