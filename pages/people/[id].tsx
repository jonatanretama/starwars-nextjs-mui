import Head from 'next/head';
import { useRouter } from 'next/router';
import { PeopleCardDetails } from '@molecules/people-card-details';
import { SpatialLayout } from '@templates/spatial-layout';

export default function PeopleId() {
  const router = useRouter();
  const pathname = router.pathname.split('/')[1];
  const queryId = router.query['id'];

  return (
    <>
      <Head>
        <title>People new</title>
        <meta name="description" content="People star wars saga" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SpatialLayout>
          {queryId && (
            <PeopleCardDetails
              idToSearch={queryId.toString()}
              actualPage={pathname}
            />
          )}
        </SpatialLayout>
      </main>
    </>
  );
}
