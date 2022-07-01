import React, { useContext } from 'react'
import Link from 'next/link'

const Header = () => {
    const categories = [
        { name: 'React', slug: 'react' },
        { name: 'Web Development', slug: 'web-dev' },
    ]
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
                                <span className='md:float-right mt-2 ml-4 align-middle text-white font-semibold cursor-pointer'>
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
