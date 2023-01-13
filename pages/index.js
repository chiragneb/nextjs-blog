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
        <p> 👋🏼 - Hello World! | <a href="mailto:chiragneb@gmail.com"> 📭 - Click to send me a Mail </a> | <a href="https://github.com/chiragneb"> 🏗️ - Click for my Github </a></p>
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
