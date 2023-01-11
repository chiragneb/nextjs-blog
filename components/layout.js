import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'




const name = 'CHIRAG NEB'
export const siteTitle = 'Chirag Neb\'s Blog'

export default function Layout({ children, home }) {
  const {theme, setTheme} = useTheme()
  return (
    <div className='ml-10 mt-10 mr-10'>
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
           <div>
           <Image
              priority
              src="/images/profile.jpg"
              height={80}
              width={100}
              alt={name}
            />
            <h1 className="mb-10">{name}</h1>
            <button
             className="mb-10"
             onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
             🌗 [dark/light]
            </button>
            </div>
          </>
        ) : (
          <>
          <div>
            <Link href="/">
              <Image
                priority
                src="/images/profile.png"
                className='rounded-full mr-16'
                height={45}
                width={45}
                alt={name}
              />
            </Link>
            <h2 className='mt-4'>
              <Link href="/">
                {name}
              </Link>
            </h2>
            <button
             className='mt-10'
             onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
             🌗 [dark/light]
            </button>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className='mt-10'>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
