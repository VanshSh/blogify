import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([])

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug).then((result) =>
                setRelatedPosts(result)
            )
        } else {
            getRecentPosts().then((result) => setRelatedPosts(result))
        }
    }, [slug])

    console.log(relatedPosts)
    return (
        <section className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                {slug ? 'Related Posts' : 'Recent Posts'}
            </h3>
            {relatedPosts.map((post) => {
                return (
                    <div key={post.title} className='flex items-center w-full'>
                        <div className='w-16 flex-none'>
                            <img
                                src={post.featuredImage?.url}
                                alt={post.title}
                                height='50px'
                                width='50px'
                                className='align-middle mt-3 rounded'
                            />
                        </div>
                        <div className='flex-grow ml-4 bg-gray-50 my-3 p-2 '>
                            <p className='text-gray-500 font-xs '>
                                {moment(post.createdAt).format('DD MMM YYYY')}
                            </p>
                            <div className='text-xl text-gray-700 hover:text-gray-900 cursor-pointer'>
                                <Link
                                    href={`/post/${post.slug}`}
                                    key={post.title}
                                >
                                    {post.title}
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default PostWidget
