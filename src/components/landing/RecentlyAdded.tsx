'use client';

import { Container, SimpleGrid } from '@chakra-ui/react';

import { DetailCard } from '../detailCard/DetailCard';

const recentlyAddedDetails = [
  {
    id: 0,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'To i tamto',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    id: 1,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'To i tamto',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    id: 2,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'To i tamto',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    id: 3,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'To i tamto',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
];

export const RecentlyAdded = () => (
  <Container minWidth='100%' bg='gray.50'>
    <Container maxW='1400px' bg='white' color='white'>
      <SimpleGrid minChildWidth='250px' spacing='40px'>
        {recentlyAddedDetails.map(() => (
          <DetailCard />
        ))}
      </SimpleGrid>
    </Container>
  </Container>
);
