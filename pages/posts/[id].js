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
      <div className='mx-14'>
      <Layout>
          <Head>
            <title className='underline'>{postData.title}</title>
          </Head>
        <article className='mx-14'>
        <h1 className='font-bold text-2xl mt-10'>{postData.title}</h1>
        <div className='ml-4 mb-4 mt-4 italic'>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
    </div>
   
  );
}