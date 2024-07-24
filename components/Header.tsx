import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Header(props: any) {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 479 ) {
      setNavbarColor(true)
    }
    if (window.scrollY < 479 ) {
      setNavbarColor(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor)
  });

  return (
    <header className={`${navbarColor ? '!bg-white ' : 'bg-red-900 '}flex justify-center p-5 max-w-7xl mx-auto ${props.whiteBg ? '!bg-white' : 'bg-yellow-500 border-y border-black sticky top-0 z-50'}`}>
      <div className='flex items-center space-x-5'>
        <Link href="/"> 
          <div className='flex object-contain items-center cursor-pointer'>
            <h1 className='text-4xl font-serif font-bold'>Felipe Cunha</h1>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header