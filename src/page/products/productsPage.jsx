import React, { useState } from 'react'
import { CardComponent, InputComponent } from '../../common'
import { IoIosSearch } from "react-icons/io";

const ProductsPage = () => {
    const [products, setProducts] = useState(1)
    return (
        <div className=''>
            <h1 className='text-center text-3xl py-2 font-medium'>Products</h1>
            <div className="search__panel flex items-center content-between w-full">
                <InputComponent label='search' inputType={'search'} className={'w-full bg-transparent'} icon={<IoIosSearch />} />
            </div>
            <div className='flex items-center justify-center flex-wrap gap-3 py-4 min-h-[80vh]'>
                {!products ? (
                    <p className='text-2xl text-gray-500 italic text-center px-2'>afsuskii, hech narsa topilmadi. qaytadan urinib ko'ring</p>
                ) : (
                    <>
                        <CardComponent product={{}} />
                        <CardComponent product={{}} />
                        <CardComponent product={{}} />
                        <CardComponent product={{}} />
                        <CardComponent product={{}} />
                        <CardComponent product={{}} />
                    </>
                )}
            </div>
        </div>
    )
}

export default ProductsPage