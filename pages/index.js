import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Search from '../components/search';
import utilStyles from '../styles/utils.module.css';
import { useRouter } from 'next/router';

export default function Home({ lat, long }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Search />
      </section>
      <section>
        Lat: {lat}
        Long: {long}
      </section>
    </Layout>
  );
}

Home.getInitialProps = async (ctx) => {
  const search = ctx.query.q;
  console.log(ctx.query);

  return {
    lat: 100.22,
    long: -45.23,
  };
};
