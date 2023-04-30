import Head from 'next/head';
import { CardsOrquestator } from '@organisms/cards-orquestator';
import { useState } from 'react';
import { useGetPeople } from '@hooks';
import { SpatialLayout } from '@templates/spatial-layout';

export default function People() {
  const [page, setPage] = useState(1);
  const [countTotalItems, setCountTotalItems] = useState<number>();

  const { data, isSuccess } = useGetPeople({
    filters: {
      page: page,
    },
    options: {
      onSuccess: res => {
        if (!countTotalItems) {
          setCountTotalItems(res.data.count);
        }
      },
    },
  });

  return (
    <>
      <Head>
        <title>People</title>
        <meta name="description" content="People star wars saga" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SpatialLayout>
          {isSuccess && (
            <CardsOrquestator
              page={page}
              setPage={setPage}
              countTotalItems={countTotalItems}
              results={data.data.results}
            />
          )}
        </SpatialLayout>
      </main>
    </>
  );
}
