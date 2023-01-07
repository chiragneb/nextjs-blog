import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';




import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths, 
        fallback: false,
    };
}


export default function Post({ postData }) {
    return (
      <Layout>
          <Head>
            <title className='underline'>{postData.title}</title>
          </Head>
          <article>
        <h1 className='underline font-bold text-2xl mb-4 mt-4'>{postData.title}</h1>
        <div className='ml-4 mb-4'>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}