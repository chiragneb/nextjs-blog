import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'




const name = 'CHIRAG NEB'
export const siteTitle = 'Chirag Neb\'s Blog'

export default function Layout({ children, home }) {
  const {theme, setTheme} = useTheme()
  return (
    <div className='grid items-center justify-center h-screen'>
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
           <div className='flex items-center mr-4 mb-10 mt-10'>
           <Image
              priority
              src="/images/profile.jpg"
              className='shadow-lg rounded-full max-w-full h-auto align-middle border-none'
              height={80}
              width={100}
              alt={name}
            />
            <h1 className="mb-10 mr-10 pl-10">{name}</h1>
            <button
             className="mb-10 mr-10"
             onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
             [toggle]
            </button>
            </div>

          </>
        ) : (
          <>
          <div className='flex items-center pb-10'>
            <button
             className='mt-10'
             onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
             [toggle dark]
            </button>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className='mt-10'>
          <Link href="/">← Back to home</Link>
          <footer className='ml-10 mt-10 mb-10 text-xs'>© 2023 builtwith nextJS and Tailwind ☮</footer>
        </div>
      )}
    </div>
    
  )
}
