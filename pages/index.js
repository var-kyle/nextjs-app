import Head from 'next/head';
import Image from 'next/image';
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

  // the api used for imgUrl says if date is not provided, it will get the closest to today's date
  // but it doesn't, so I'm just adding a date for now.
  // will add a datepicker option in the future
  return {
    props: {
      locationName: response ? response.locationName : '',
      bestMatch: response ? response.bestMatch : '',
      allMatches: response ? response.allMatches : '',
      imgUrl: response
        ? `${process.env.NASA_API_BASE_URL}?api_key=${process.env.NASA_API_KEY}&lat=${response.bestMatch.latLng.lat}&lon=${response.bestMatch.latLng.lng}&date=2014-02-01&dim=0.5`
        : '',
      imgAlt: response ? `Satellite image of ${response.locationName}` : '',
    },
  };
}

export default function Home({
  locationName,
  bestMatch,
  allMatches,
  imgUrl,
  imgAlt,
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.maxWidth36} ${utilStyles.centered}`}
      >
        <Search q={locationName} />
      </section>
      <section className={`${utilStyles.imageSection}`}>
        {imgUrl ? (
          <Image src={imgUrl} alt={imgAlt} width={1280} height={960} />
        ) : (
          ''
          /* <div>
            <iframe
              src="https://giphy.com/embed/8FoLIrNT2jK0evs6bG"
              width="480"
              height="480"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/8FoLIrNT2jK0evs6bG">via GIPHY</a>
            </p>
          </div> */
        )}
      </section>
      <div className={`${utilStyles.credit}`}>
        <span>
          Background image by{' '}
          <a href="https://unsplash.com/@actionvance?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            ActionVance
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/s/photos/earth?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>
    </Layout>
  );
}
