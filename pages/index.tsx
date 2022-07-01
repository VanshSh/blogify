import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  const posts = [
    { title: 'React Testing ', excerpt: 'Learn React Testing' },
    { title: 'React with Tailwind ', excerpt: 'Learn React with Tailwind' },
  ]
  return (
    <div className="container mx-auto px-10 mb-10 ">
      <Head>
        <title>Blogify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'
      >
        {posts.map((post, index) => {
          return (
            <div>
              <h1>{post.title}</h1>
              <p>{post.excerpt}</p>
            </div>
          )

        })}

      </div>

    </div>
  )
}

export default Home

