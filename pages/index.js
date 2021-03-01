import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Search from '../components/search';
import utilStyles from '../styles/utils.module.css';
import { getGeocodedResults } from '../lib/geocode';

export async function getServerSideProps(context) {
  const search = context.query.q;
  let response;

  if (search) {
    response = await getGeocodedResults(search);
  }

  return {
    props: {
      locationName: response.locationName,
      bestMatch: response.bestMatch,
      allMatches: response.allMatches,
    },
  };
}

export default function Home({ locationName, bestMatch, allMatches }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Search q={locationName} />
      </section>
      <section>
        Location: {locationName ?? "didn't populate"}
        <br />
        Lat: {bestMatch?.latLng.lat}
        <br />
        Long: {bestMatch?.latLng.lng}
      </section>
    </Layout>
  );
}
