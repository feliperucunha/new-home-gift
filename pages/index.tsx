import Head from 'next/head'
import Header from '../components/Header'
import React from 'react';
import { sanityClient } from '../sanity'
import { Post } from '../typings';
import Banner from '../components/Banner';
import Posts from '../components/Posts';
import { GiCrossMark } from "react-icons/gi";
import CopyToClipboard from '../components/CopyToClipboard';
import ClockIcon from '../components/ClockIcon';
import DragonIcon from '../components/DragonIcon';
import MapButton from '../components/MapButton';
import PresenceModal from '../components/PresenceModal';

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  const [isOpen, setOpen] = React.useState(false)
  const handleButton = () => {
    setOpen(true)
  }
  return (
    <div className='overflow-hidden' style={{
      background: `#3C1E1E`
    }}>
      {/* <div className='max-w-7xl mx-auto' style={{ backgroundImage: "url('/images/bricks.png')" }}> */}
      <Head>
        <title>Casa Nova | Felipe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <div className='flex sm:justify-between items-center h-[100vh] sm:h-[100vh] px-10 flex-col sm:flex-row text-left'>
        <div className='sm:pr-6 pt-8 sm:pt-0 pb-8 sm:pb-0'>
          <p className='text-2xl rounded-md'>
            <p className='text-4xl pb-8 sm:pb-16 text-[#B59A86]' style={{ fontFamily: 'Uncial Antiqua, serif' }}>Gostaríamos de celebrar com o Felipe essa nova fase com um chá de casa nova.</p>
            <p className='text-base text-[#E5E5E8]' style={{ fontFamily: 'Poppins, sans-serif' }}>Este site foi criado para dar detalhes do evento e também facilitar a escolha de presentes, caso você queira dar algum, que vão ajudar Felipe a montar seu novo lar.</p>
            <p className='text-base text-[#E5E5E8]' style={{ fontFamily: 'Poppins, sans-serif' }}>Aqui você encontrará itens selecionados com carinho para tornar a casa de Felipe ainda mais especial e acolhedora.</p>
          </p>
        </div>
        <div className='relative bottom-36'>
          <img
            src="images/foto-casa.jpeg"
            alt="Portrait"
            className="object-cover h-auto"
          />
        </div>
      </div>

      <div className='flex justify-center items-center flex-col h-[60vh] sm:h-[100vh] bg-no-repeat bg-left-top bg-cover mt-16' style={{ backgroundImage: "url('/images/mapa.png')" }}>
        <div className='mt-32 px-8'>
          <div className='flex items-center pb-6 text-xl text-[#E5E5E8]'>
            <GiCrossMark fill='#F5B971' stroke='#F5B971' />
            <p className='pl-2 ' style={{ fontFamily: 'Uncial Antiqua, serif' }}>RUA FREDERICO MAURER, 2395</p>
          </div>
          <div className='flex items-center text-xl text-[#E5E5E8] mb-8'>
            <ClockIcon fill='#F5B971' />
            <p className='pl-2' style={{ fontFamily: 'Uncial Antiqua, serif' }}>12/08/2024 ÀS 19H</p>
          </div>
          <MapButton address="RUA FREDERICO MAURER, 2395" />
          <button onClick={handleButton} className={`mt-8 text-white hover:bg-[#80613a] focus:ring-4 focus:outline-none focus:ring-[#783131] font-medium rounded-md text-sm px-5 py-2.5 text-center bg-[#783131]`}>Confirmar Presença</button>
          {isOpen && <PresenceModal setOpen={setOpen} />}
        </div>
        <DragonIcon height='300px' className='relative left-48 top-20 mt-[-13rem]' fill='#c19157' />
      </div>

      <div className='mt-20 mb-12'>

        <h1 className='text-center text-4xl text-[#DFBF93] pb-8' style={{ fontFamily: 'Uncial Antiqua, serif' }}>PRESENTES</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 mx-4'>
          <Posts posts={posts} />
        </div>
      </div>

      <div className='h-[90vh] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/images/footer-bg.jpeg')" }}>
        <div className='mx-8 pt-20'>
          <h1 className='text-[#F5B971] text-2xl pb-6' style={{ fontFamily: 'Uncial Antiqua, serif' }}>
            NÃO ACHOU O QUE QUERIA?
          </h1>
          <p className='text-[#F4F1ED] text-base mx-4' style={{ fontFamily: 'Poppins, sans-serif' }}>
            Não tem problema, caso ainda queira presentar com algo você pode contribuir diretamente pelo Pix abaixo para que o Felipe possa comprar um robô aspirador no Paraguai no natal hehehe.
          </p>
        </div>
        <div className='mt-8 mx-12'>
          <p className='text-[#F4F1ED]' style={{ fontFamily: 'Poppins, sans-serif' }}>Pix Copia e cola:</p>
          <div className='bg-white rounded-md'>
            <CopyToClipboard text={'00020126330014BR.GOV.BCB.PIX0111013129372975204000053039865802BR5925Felipe Ruben Costa da Cun6009SAO PAULO62140510VQ6dDL1nEp6304E28B'} />
          </div>
        </div>
        <div className='mt-2 mx-12'>
          <p className='text-[#F4F1ED]' style={{ fontFamily: 'Poppins, sans-serif' }}>Pix CPF:</p>
          <div className='bg-white rounded-md'>
            <CopyToClipboard text={'01312937297'} />
          </div>
        </div>
        <div className='flex justify-center items-center pt-0 h-1/3'>
          <img src='/images/qr-code.jpeg' className='w-60 h-70' />
        </div>
      </div>
      <div className='text-white bg-[#3C1E1E] text-center' style={{ fontFamily: 'Poppins, sans-serif' }}>
        Por favor, confirme sua presença.
      </div>
    </div>
  )
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
      post._ref == ^._id &&
      approved == true
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
