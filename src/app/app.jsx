import React, { useEffect } from 'react'
import { ProductsPage } from '../page'

export default function App() {
    const telegram = window.Telegram.WebApp
    console.log(telegram.request);
    useEffect(() => {
        telegram.ready()
    })
    return (
        <div className='max-w-[1440px] w-full mx-auto'>
            <div className='container'>
                <ProductsPage />
            </div>
        </div>
    )
}