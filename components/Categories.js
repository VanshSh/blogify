import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <section className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                Categories
            </h3>
            {categories.map((category) => {
                return (
                    <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                    >
                        <span className='cursor-pointer text-xl text-gray-600 hover:text-black block font-semibold pb-3 mb-3'>
                            {category.name}
                        </span>
                    </Link>
                )
            })}
        </section>
    )
}

export default Categories
