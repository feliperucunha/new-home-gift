import Head from 'next/head'
import Header from '../components/Header'
import { sanityClient } from '../sanity'
import { Post } from '../typings';
import Banner from '../components/Banner';
import Posts from '../components/Posts';
import { CiLocationOn, CiClock1 } from "react-icons/ci";
import CopyToClipboard from '../components/CopyToClipboard';

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div className='' style={{
      background: `#3C1E1E`
    }}>
      {/* <div className='max-w-7xl mx-auto' style={{ backgroundImage: "url('/images/bricks.png')" }}> */}
      <Head>
        <title>Casa Nova | Felipe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />


      <div className='flex sm:justify-between items-center h-[90vh] sm:h-[100vh] px-10 flex-col sm:flex-row text-left'>
        <div className='sm:pr-6 pt-8 sm:pt-0 pb-8 sm:pb-0'>
          <p className='text-2xl rounded-md'>
            <p className='text-4xl pb-8 sm:pb-16 text-[#B59A86]'>Gostaríamos de celebrar com o Felipe essa nova fase com um chá de casa nova.</p>
            <p className='text-base text-[#E5E5E8]'>Este site foi criado para dar detalhes do evento e também facilitar a escolha de presentes, caso você queira dar algum, que vão ajudar Felipe a montar seu novo lar.</p>
            <p className='text-base text-[#E5E5E8]'>Aqui você encontrará itens selecionados com carinho para tornar a casa de Felipe ainda mais especial e acolhedora.</p>
          </p>
        </div>
        <img
          src="images/foto-casa.jpeg"
          alt="Portrait"
          className="object-cover rounded-lg shadow-md shadow-black h-72 sm:ml-0 ml-20"
        />
      </div>

      <div className='flex justify-center items-center flex-col h-[60vh] sm:h-[100vh] bg-no-repeat bg-left-top bg-cover' style={{ backgroundImage: "url('/images/mapa.png')" }}>
        <div className='flex items-center pb-6 text-xl text-[#E5E5E8]'>
          <CiLocationOn />
          <p className='pl-2'>RUA FRANCISCO MAURER, 2395</p>
        </div>
        <div className='flex items-center text-xl text-[#E5E5E8]'>
          <CiClock1 />
          <p className='pl-2'>12/08/2024 ÀS 19H</p>
        </div>
      </div>

      <div className='mt-20 mb-12'>

        <h1 className='text-center text-4xl text-[#DFBF93] pb-8'>PRESENTES</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 mx-4'>
          <Posts posts={posts} />
        </div>
      </div>

      <div className='h-[80vh] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/images/footer-bg.jpeg')" }}>
        <div className='mx-8 pt-20'>
          <h1 className='text-[#F5B971] text-2xl pb-6'>
            NÃO ACHOU O QUE QUERIA?
          </h1>
          <p className='text-[#F4F1ED] text-base mx-4'>
            Não tem problema, caso ainda queira presentar com algo você pode contribuir diretamente pelo Pix abaixo para que o Felipe possa comprar um robô aspirador no Paraguai no natal hehehe.
          </p>
        </div>
        <div className='mt-8 mx-12'>
          <p className='text-[#F4F1ED]'>Pix Copia e cola:</p>
          <div className='bg-white rounded-md'>
            <CopyToClipboard text={'00020126330014BR.GOV.BCB.PIX0111013129372975204000053039865802BR5925Felipe Ruben Costa da Cun6009SAO PAULO62140510VQ6dDL1nEp6304E28B'} />
          </div>
        </div>
        <div className='mt-2 mx-12'>
          <p className='text-[#F4F1ED]'>Pix CPF:</p>
          <div className='bg-white rounded-md'>
            <CopyToClipboard text={'01312937297'} />
          </div>
        </div>
        <div className='flex justify-center items-center pt-8'>
          <img src='/images/qr-code.jpeg' className='w-56 h-56' />
        </div>
      </div>
      <div className='text-white bg-[#3C1E1E] text-center'>
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
      slug,
      author -> {
        name,
        image
      },
      description,
      mainImage,
      body
    }
  `;
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    }
  }
};
