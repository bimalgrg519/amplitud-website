import type { NextPage } from "next";
import { useSelector } from "react-redux";
import Head from 'next/head'
import CreatorNav from '@/components/Creator/compos/CreatorNav'
import Artwork from '@/components/Creator/step3/Artwork';
import { selectLoaderState } from "@/store/slices/loaderSlice";
import { selectErrorState } from "@/store/slices/errorSlice";
import type { IError }  from "@/store/slices/errorSlice";
import ErrorMessage from "@/components/Creator/compos/ErrorMessage";
import TopBarProgress from "react-topbar-progress-indicator";


TopBarProgress.config({
  barColors: {
    "0": "#6442ff",
    "1.0": "#6442ff"
  },
  shadowBlur: 10,
  barThickness: 5
});

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default (() => {

  const isLoader: boolean = useSelector(selectLoaderState);
  const errorMessage: IError = useSelector(selectErrorState);  

  return (
    <>
      <Head>
        <title>Amplitud</title>
        <meta name="description" content="Amplitud." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet" /> */}
      </Head>
      {isLoader && <TopBarProgress />}
      <ErrorMessage />
      <main className="px-20 flex items-center justify-center flex-col">
        <CreatorNav />
        <Artwork />
        
      </main>
    </>
  )
});