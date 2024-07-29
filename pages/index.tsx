import Head from 'next/head';
import Header from '../components/Header';
import React from 'react';
import { sanityClient } from '../sanity';
import { Post } from '../typings';
import Banner from '../components/Banner';
import Posts from '../components/Posts';
import { GiCrossMark } from "react-icons/gi";
import CopyToClipboard from '../components/CopyToClipboard';
import ClockIcon from '../components/ClockIcon';
import DragonIcon from '../components/DragonIcon';
import MapButton from '../components/MapButton';
import PresenceModal from '../components/PresenceModal';
import { HeadersConstants, PaymentConstants, PresenceMessageConstants, Colors, Text } from '../constants';

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  const [isOpen, setOpen] = React.useState(false);
  const { metaDescription, metaImage, metaTitle, metaUrl, websiteTitle } = HeadersConstants;
  const { isActive, presenceMessage } = PresenceMessageConstants;
  const { paymentSubtitle, paymentTitle, paymentPixCopyAndPaste, paymentPixKey, paymentPixQrCode } = PaymentConstants;

  const handleButton = () => {
    setOpen(true);
  };

  return (
    <div className='overflow-hidden' style={{ background: Colors.background }}>
      <Head>
        <title>{websiteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:type" content="website" />
      </Head>

      <Banner />

      <div className='flex sm:justify-between items-center h-[100vh] sm:h-[100vh] px-10 flex-col sm:flex-row text-left'>
        <div className='sm:pr-6 pt-8 sm:pt-0 pb-8 sm:pb-0'>
          <p className='text-2xl rounded-md'>
            <p className='text-4xl pb-8 sm:pb-16' style={{ color: Colors.textSecondary, fontFamily: 'Uncial Antiqua, serif' }}>
              {Text.title}
            </p>
            <p className='text-base' style={{ color: Colors.textPrimary, fontFamily: 'Poppins, sans-serif' }}>
              {Text.description}
            </p>
          </p>
        </div>
        <div className='relative bottom-36 sm:flex sm:justify-center sm:align-middle sm:static'>
          <img
            src="images/foto-casa.jpeg"
            alt="Portrait"
            className="object-cover h-auto"
          />
        </div>
      </div>

      <div className='flex justify-center items-center flex-col h-[60vh] sm:h-[100vh] bg-no-repeat bg-left-top bg-cover mt-16' style={{ backgroundImage: "url('/images/mapa.png')" }}>
        <div className='mt-32 px-8 sm:mt-[15rem]'>
          <div className='flex items-center pb-6 text-xl' style={{ color: Colors.textPrimary }}>
            <GiCrossMark fill={Colors.mapIcon} stroke={Colors.mapIcon} />
            <p className='pl-2 sm:text-4xl' style={{ fontFamily: 'Uncial Antiqua, serif' }}>
              {Text.address}
            </p>
          </div>
          <div className='flex items-center text-xl mb-8' style={{ color: Colors.textPrimary }}>
            <ClockIcon fill={Colors.mapIcon} />
            <p className='pl-2 sm:text-4xl' style={{ fontFamily: 'Uncial Antiqua, serif' }}>
              {Text.date}
            </p>
          </div>
          <div className='flex flex-col w-52 sm:w-60'>
            <MapButton address={Text.address} />
            <button onClick={handleButton} className={`mt-8 w-auto text-white hover:bg-[${Colors.buttonHover}] focus:ring-4 focus:outline-none focus:ring-[${Colors.buttonPrimary}] font-medium rounded-md text-sm px-5 py-2.5 text-center`} style={{ backgroundColor: Colors.buttonPrimary }}>
              {Text.confirmPresence}
            </button>
          </div>
          {isOpen && <PresenceModal setOpen={setOpen} />}
        </div>
        <DragonIcon height='300px' className='relative left-48 top-20 mt-[-13rem] sm:h-[35rem] sm:left-[30rem] sm:mt-[-10rem]' fill={Colors.dragonIcon} />
      </div>

      <div className='mt-20 mb-12'>
        <h1 className='text-center text-4xl' style={{ color: Colors.headerText, fontFamily: 'Uncial Antiqua, serif' }}>
          PRESENTES
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 mx-4 justify-items-center'>
          <Posts posts={posts} />
        </div>
      </div>

      <div className='h-[100vh] w-[100vw] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/images/footer-bg.jpeg')" }}>
        <div className='mx-8 pt-20'>
          <h1 className='text-3xl' style={{ color: Colors.footerTitle, fontFamily: 'Uncial Antiqua, serif' }}>
            {paymentTitle}
          </h1>
          <p className='text-base mx-4 mt-2' style={{ color: Colors.footerText, fontFamily: 'Poppins, sans-serif' }}>
            {paymentSubtitle}
          </p>
        </div>
        <div className='sm:flex sm:justify-center sm:items-center sm:flex-col'>
          <div className='mt-8 mx-12 sm:w-80'>
            <p className='text-[#F4F1ED]' style={{ fontFamily: 'Poppins, sans-serif' }}>
              {Text.paymentPixCopyAndPaste}
            </p>
            <div className='bg-white rounded-md'>
              <CopyToClipboard text={paymentPixCopyAndPaste} />
            </div>
          </div>
          <div className='mt-2 mx-12 sm:w-80'>
            <p className='text-[#F4F1ED]' style={{ fontFamily: 'Poppins, sans-serif' }}>
              {Text.paymentPixKey}
            </p>
            <div className='bg-white rounded-md'>
              <CopyToClipboard text={paymentPixKey} />
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center pt-0 h-1/3'>
          <img src={paymentPixQrCode} className='w-60 h-70' />
        </div>
      </div>
      {isActive && (
        <div className={`text-white flex justify-center`} style={{ backgroundColor: Colors.background, fontFamily: 'Poppins, sans-serif' }}>
          {presenceMessage}
        </div>
      )}
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `
    *[_type == "post"] {
      _id,
      title,
      link,
      price,
      buyer,
    'comments': *[
      _type == 'comment' &&
      post._ref == ^._id
    ],
      mainImage
    }
  `;
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    }
  }
};
