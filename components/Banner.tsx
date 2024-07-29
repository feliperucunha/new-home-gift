import React from 'react'
import { BannerConstants } from '../constants';

function Banner() {
  const scrollDown = () => {
    console.log(window.innerHeight)
    window.scrollTo({
      top: window.pageYOffset + window.innerHeight,
      behavior: 'smooth'
    });
  };

  const [showArrow, setShowArrow] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      setShowArrow(currentPosition >= 0 && currentPosition <= 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { bigTitle, bottomTitle, fontColor, image, secondBottomTitle, smallTitle } = BannerConstants

  const imageUrl = `url(${image})`

  return (
    <div className='flex justify-center items-center pb-16 sm:pb-0 border-y border-black border-t-0 bg-red-900 lg:py-5 w-full h-[100vh] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: imageUrl }}>
      <div className='text-center'>
        <p className={`text-[${fontColor}] pb-6`} style={{ fontFamily: 'Uncial Antiqua, serif' }}>{smallTitle}</p>
        <h1 className={`sm:text-7xl text-5xl font-bold font-serif text-[${fontColor}] px-10 pb-6`} style={{ fontFamily: 'Uncial Antiqua, serif' }}>
          {bigTitle}
        </h1>
        <div className='flex items-center justify-center flex-col sm:flex-row'>
        <p className={`line-through text-[${fontColor}] text-3xl pr-3`} style={{ fontFamily: 'Poppins, sans-serif' }}>{bottomTitle}</p> 
          <h1 className={`text-3xl font-bold font-serif text-[${fontColor}]`} style={{ fontFamily: 'Poppins, sans-serif' }}>
            {secondBottomTitle}
          </h1>
        </div>
      </div>


      {showArrow && (
        <div className="fixed bottom-20 z-50">
          <button onClick={scrollDown} className="text-gray-600 hover:text-gray-900 transition duration-300 focus:outline-none fill-white cursor-pointer hover:duration-1000">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-bounce" viewBox="0 0 24 24"><g data-name="15.Arrow Down"><path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" /><path d="m12 18.414-4.707-4.707 1.414-1.414L12 15.586l3.293-3.293 1.414 1.414L12 18.414z" /><path d="M11 6h2v11h-2z" /></g></svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default Banner