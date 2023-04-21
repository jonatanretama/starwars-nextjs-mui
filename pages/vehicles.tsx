import Head from 'next/head';
import { CardsOrquestator } from '@organisms/cards-orquestator';
import { useState } from 'react';
import { useGetVehicles } from '@hooks';
import { TypesSwapi } from '@models';
import axios from 'axios';
import { Button } from '@mui/material';

export default function Vehicles() {
  const [page, setPage] = useState(1);
  const [countTotalItems, setCountTotalItems] = useState<number>();

  const { data, isSuccess } = useGetVehicles({
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

  // Example to scrape images on React component
  const handleClick = async () => {
    data.data.results.map(async item => {
      try {
        await axios.get('/api/scrape-image', {
          params: {
            search: item.name,
            type: 'vehicles' as TypesSwapi,
          },
        });
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <>
      <Head>
        <title>Vehicles</title>
        <meta name="description" content="Vehicles star wars saga" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button onClick={handleClick}>Scrape images</Button>
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
