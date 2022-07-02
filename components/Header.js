import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Header = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <header className='container mx-auto px-10 mb-10'>
            <div className='border-b w-full inline-block border-blue-400 py-8'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer font-bold text-4xl text-white'>
                            Blogify
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => {
                        return (
                            <Link
                                key={category.slug}
                                href={` /categories/${category.slug} `}
                            >
                                <span className='md:float-right mt-2 ml-4 align-middle text-white text-xl font-bold cursor-pointer hover:text-cyan-300'>
                                    {category.name}
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}

export default Header
