import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A software engineer at heart and a co-founder of <a href="https://wanda.space">wanda.space</a>. 
          Building products is my craft as is my passion for creating a team culture 
          that is innovative, inclusive, diverse, and based on a growth mindset that 
          loves learning and seeks to solve challenging problems.</p>
        <p>
          You can read more on my <a href="https://macyves.wordpress.com">blog</a> and contact me on <a href="https://twitter.com/yveshwang">Twitter</a>. 
        </p>
      </section>
    </Layout>
  );
}