import Head from 'next/head';
import { CardsOrquestator } from '@organisms/cards-orquestator';
import { useState } from 'react';
import { useGetPeople } from '@hooks';
import { useRouter } from 'next/router';
import { PeopleCardDetails } from '@molecules/people-card-details';

export default function People() {
  const router = useRouter();
  const pathname = router.pathname.split('/')[1];

  // const { data, isSuccess } = useGetPeople({
  //   filters: {
  //     page: page,
  //   },
  //   options: {
  //     onSuccess: res => {
  //       if (!countTotalItems) {
  //         setCountTotalItems(res.data.count);
  //       }
  //     },
  //   },
  // });

  return (
    <>
      <Head>
        <title>People new</title>
        <meta name="description" content="People star wars saga" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {router.query['id']} - {router.pathname}
        {pathname}
        {router.query['id'] && (
          <PeopleCardDetails
            idToSearch={router.query['id'].toString()}
            actualPage={pathname}
          />
        )}
      </main>
    </>
  );
}
