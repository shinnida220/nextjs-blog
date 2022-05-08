import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Nuel. I'm a software engineer and a husband to a fantastic woman <a href="https://www.instagram.com/makenewdesigns/">(Titi)</a> - a mother of of 3 (Iremide, Ogomide & Ayomide). You can contact me on <a href="https://twitter.com/ibkcom">Twitter</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// Static Page Generation
export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData }
  };
}

// Server-side Rendering:
// export async function getServerSideProps(context) {
//   // console.log(context);
//   const allPostsData = getSortedPostsData();
//   return {
//     props: { allPostsData }
//   };
// }