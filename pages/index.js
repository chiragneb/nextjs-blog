import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { useTheme } from 'next-themes';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  const {theme, setTheme} = useTheme()
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>   
      </Head>
      <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          🌗
        </button>
      
      <section>
        
        <p>
        Hello, my name is Chirag. I am currently learning React and NextJS and am seeking remote work opportunities with companies and organizations that use these technologies in production. As a junior developer, I am eager to apply my skills and knowledge to help these organizations succeed.
        </p>
      
        <a href="mailto:chiragneb@gmail.com"> Mail 📭 </a>
        <br />
        <a href="https://github.com/chiragneb"> Github 💻 </a>
        <br />
      </section>
      <br />
      <section>
        <h2> Blog Entries 📜</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
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
