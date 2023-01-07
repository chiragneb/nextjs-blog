import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'



const name = 'CHIRAG NEB\'s Blog'
export const siteTitle = 'Chirag Neb\'s Blog'

export default function Layout({ children, home }) {
  const {theme, setTheme} = useTheme()
  return (
    <div className='container md:container mt-10 mb-10'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="chirag neb's Blog"
          content="my blog..."
        />
      </Head>
      <header>
        {home ? (
          <>
           <div className='flex'>
           <Image
              priority
              src="/images/profile.jpg"
              className='rounded-full mr-10'
              height={90}
              width={90}
              alt={name}
            />
            <h1 className='font-bold text-4xl mr-10 mt-10'>{name}</h1>
            <button
            className='ml-20'
             onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
             〈🌗〉
            </button>
            
            </div>
          </>
        ) : (
          <>
          <div className='flex items-center mb-10'>
            <Link href="/">
              <Image
                priority
                src="/images/profile.png"
                className='rounded-full mr-20'
                height={45}
                width={45}
                alt={name}
              />
            </Link>
            <h2 className='font-bold mr-10 text-2xl'>
              <Link href="/">
                {name}
              </Link>
            </h2>
            <button
             onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
             〈🌗〉
            </button>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className='mt-4 mb-4 underline'>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
