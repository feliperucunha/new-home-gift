import React from 'react'
import Link from 'next/link'
import { urlFor } from '../sanity'
import { Post } from '../typings';
import Modal from './Modal';

interface Props {
  posts: [Post];
}


function Posts({ posts }: Props) {
  const [isOpen, setOpen] = React.useState(false)
  const handleButton = () => {
    setOpen(true)
  }

  console.log(posts)

  return (
    <>
      {posts.map(post => (
        <div className={`w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow  ${post?.comments[0] ? 'opacity-70' : 'opacity-100'}`}>
          <div className='min-h-[20rem] min-w-[20rem] flex items-center justify-center'>
            {post?.mainImage ? (
              <img className="p-8 rounded-t-lg object-contain max-w-full max-h-60" src={urlFor(post?.mainImage).url()!} alt="product image" />
            ) : null}
          </div>
          <div className="px-5 pb-5">
            <a href={post.link} target="_blank">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900">{post.title}</h5>
            </a>
            <a href={post.link} target="_blank" className="flex items-center mt-2.5 mb-5">
              <a href={post.link} target="_blank" className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">Link</a>
            </a>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900">R${post.price}</span>
              <button onClick={handleButton} disabled={!!post?.comments[0]} className={`text-white hover:bg-[#80613a] focus:ring-4 focus:outline-none focus:ring-[#c19157] font-medium rounded-lg text-sm px-5 py-2.5 text-center  ${post?.comments[0] ? '!bg-slate-400' : 'bg-[#c19157]'}`}>{post?.comments[0] ? `Reservado por ${post?.comments[0].name}` : 'Presentear'}</button>
            </div>
          </div>
          {isOpen && <Modal setOpen={setOpen} id={post._id} link={post.link} item={post.title} />}
        </div>
      ))}
    </>
  )
}

export default Posts