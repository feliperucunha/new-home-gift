import React from 'react'
import Link from 'next/link'
import { urlFor } from '../sanity'
import { Post } from '../typings';

interface Props {
  posts: [Post];
}


function Posts({ posts }: Props) {
  return (
    <>
      {posts.map(post => (
        // <Link key={post._id} href={`/post/${post.slug.current}`}>
        //   <div className='group cursor-pointer border rounded-lg overflow-hidden'>
        //     {/* the ! symbol protects from empty values */}
        //     <img
        //       className='h-60 w-full object-cover group-hover:scale-105 transition-transform durantion-200 ease-in-out'
        //       src={urlFor(post.mainImage).url()!}
        //       alt={post.description}
        //     />
        //     <div className='flex justify-between p-5 bg-white'>
        //       <div>
        //         <p className='text-lg font-bold'>{post.title}</p>
        //         <p className='text-xs'>{post.description} by {post.author.name}</p>
        //       </div>

        //       <img
        //         className='h-12 w-12 rounded-full'
        //         src={urlFor(post.author.image).url()!}
        //         alt={post.author.name} 
        //       />
        //     </div>
        //   </div>
        // </Link>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="p-8 rounded-t-lg" src={urlFor(post.mainImage).url()!} alt="product image" />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span> */}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">R$599</span>
              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Presentear</a>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Posts