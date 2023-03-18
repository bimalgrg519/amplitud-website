import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='w-screen flex flex-col items-center justify-center '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
