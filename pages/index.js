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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>   
      </Head>
      
      <section className='mt-10'> 
        <p className='mb-5' > 👋🏼 - Hello World!  <br/> <br/> <a href="mailto:chiragneb@gmail.com"> 📭 - Click to send me a Mail </a> <br/><br/>
        <a href="https://github.com/chiragneb"> 🏗️ - Click for my Github </a></p>
      </section>
      <br />

      <section>
        <h2 className='font-bold mb-5'> 📜 Blog Entries </h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (  
            <li className= "underline decoration-dotted my-4" key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small>
            <Date dateString={date} />
            </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
