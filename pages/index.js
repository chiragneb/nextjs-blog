import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
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
      <section className={utilStyles.headingMd}>
        
        <p>
        Hello, my name is Chirag. I am currently learning React and NextJS and am seeking remote work opportunities with companies and organizations that use these technologies in production. As a junior developer, I am eager to apply my skills and knowledge to help these organizations succeed.
        </p>
      
        <a href="mailto:chiragneb@gmail.com" className={`${utilStyles.linkclass}`}> Mail 📭 </a>
        <br />
        <a href="https://github.com/chiragneb" className={`${utilStyles.linkclass}`}> Github 💻 </a>
        <br />
      </section>
      <br />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}> Blog Entries 📜</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
            <Date dateString={date} />
            </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
