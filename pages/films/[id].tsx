import Head from 'next/head';
import { useRouter } from 'next/router';

export default function FilmsId() {
  const router = useRouter();
  const pathname = router.pathname.split('/')[1];
  const queryId = router.query['id'];

  return (
    <>
      <Head>
        <title>Films new</title>
        <meta name="description" content="Films star wars saga" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {queryId} - {router.pathname}
        {pathname}
      </main>
    </>
  );
}
