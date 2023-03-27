import Head from 'next/head'
import Image from 'next/image'
import CreatorNav from '@/components/Creator/compos/CreatorNav'
import Artwork from '@/components/Creator/step3/Artwork'

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Amplitud</title>
        <meta name="description" content="Amplitud." />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet" /> */}
      </Head>
      <main className="px-20 flex items-center justify-center flex-col">

      </main>
    </>
  )
}
