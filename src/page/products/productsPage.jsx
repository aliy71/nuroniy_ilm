import React, { useState } from 'react'
import { CardComponent, InputComponent } from '../../common'
import { IoIosSearch } from "react-icons/io";

const ProductsPage = () => {
    const [products, setProducts] = useState(1)
    const telegram = window.Telegram.WebApp
    const MainButtonHandle = () => {
        telegram.MainButton.text = 'Buyurtma berish'
        telegram.MainButton.show()
    }
    return (
        <div className=''>
            <h1 className='text-center text-3xl py-2 font-medium'>Products</h1>
            <div className="search__panel flex items-center justify-center ">
                <InputComponent label='search...' inputType={'text'} className={'w-[280px] text-md bg-transparent text-white'} icon={<IoIosSearch className='text-white size-6 group-hover:scale-[140%] transition-all' />} />
            </div>
            <div className='flex items-center justify-center flex-wrap gap-3 py-4 min-h-[80vh]'>
                {!products ? (
                    <p className='text-2xl text-gray-500 italic text-center px-2'>afsuskii, hech narsa topilmadi. qaytadan urinib ko'ring</p>
                ) : (
                    <>
                            {
                                [1, 2, 3, 4, 5].map(idx => (
                                    <CardComponent key={idx} product={{}} MainButtonHandle={MainButtonHandle} />
                                ))
                            }
                    </>
                )}
            </div>
        </div>
    )
}

export default ProductsPage