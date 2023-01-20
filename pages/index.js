import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  
  return (
    <>
    <div className='mr-16 ml-16 md:mr-4 md:ml-4'>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className='mb-12'><span className='mx-4'>👋🏼 - Hello World!</span>|<span className='mx-4'> <a href="mailto:chiragneb@gmail.com"> 📭  Mail ↗ </a></span>|<span className='mx-4'><a href="https://github.com/chiragneb"> 🏗️ - Github ↗ </a></span>|<span className='mx-4'><Link href='/repos'> Repository List ↗ </Link></span></p>
        <h1 className='mt-16 mb-4'> 🏛️ Projects </h1>
        <ol className='my-2'>
          <li className='my-2'><a href='https://nextpricetracker.vercel.app'>CryptoCurrency Price tracking App built with Nextjs & TailwindCSS ↗</a></li>
          <li className='my-2'><a href='https://moviesearch-omdb.vercel.app/'>Movie Search APP built with React ↗</a></li>
          <li className='my-2'><a href='https://fiatconverter.vercel.app/'>Currency Coverter Built with SvelteKit and TailwindCSS ↗ </a></li>
        </ol>
      </section>
      <br />
      <section>
        <h2 className='mt-4 mb-6'> 📜 Blog Entries </h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link className='italic' href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className='py-4'>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <footer className='ml-10 mt-10 mb-10 text-xs'>© 2023 builtwith nextJS and Tailwind ☮</footer>
    </Layout>
    </div>
    
    </>
  );
}
