import Head from 'next/head';
import { CardsOrquestator } from '@organisms/cards-orquestator';
import { useState } from 'react';
import { useGetPlanets } from '@hooks';

export default function Planets() {
  const [page, setPage] = useState(1);
  const [countTotalItems, setCountTotalItems] = useState<number>();

  const { data, isSuccess } = useGetPlanets({
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
        <title>Planets</title>
        <meta name="description" content="Planets star wars saga" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {isSuccess && (
          <CardsOrquestator
            page={page}
            setPage={setPage}
            countTotalItems={countTotalItems}
            results={data.data.results}
          />
        )}
      </main>
    </>
  );
}
