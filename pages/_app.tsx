import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleFonts } from 'next-google-fonts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Uncial+Antiqua&family=Poppins:wght@300;400;500;600;700&display=swap" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
