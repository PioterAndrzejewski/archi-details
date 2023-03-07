'use client';

import { useRef, useState } from 'react';
import {
  Button,
  Container,
  HStack,
  Tag,
  TagLabel,
  VStack,
} from '@chakra-ui/react';

const categoriesToRender = [
  'this is sample category 1',
  'this is sample category 2',
  'this is sample category 3',
  'this is sample category 4 ',
  'this is sample category 5 ',
  'this is sample category 6',
  'this is sample category 7',
  'this is sample category 8',
  'this is sample category 9',
  'this is sample category 10',
  'this is sample category 11',
  'this is sample category 12',
  'this is sample category 13',
  'this is sample category 14',
  'this is sample category 15',
  'this is sample category 16',
];

function Demo({ datas }: { datas: string[] }) {
  const [scrollX, setscrollX] = useState(0);
  const [scrollEnd, setscrollEnd] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  const slide = (shift: number) => {
    if (container) {
      container.current!.scrollLeft! += shift;
      setscrollX(scrollX + shift);
    }

    if (
      Math.floor(
        container!.current!.scrollWidth - container!.current!.scrollLeft,
      ) <= container!.current!.offsetWidth
    ) {
      setscrollEnd(true);
    } else {
      setscrollEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(container!.current!.scrollLeft);
    if (
      Math.floor(
        container!.current!.scrollWidth - container!.current!.scrollLeft,
      ) <= container!.current!.offsetWidth
    ) {
      setscrollEnd(true);
    } else {
      setscrollEnd(false);
    }
  };

  return (
    <Container minWidth='100%' bg='gray.50' paddingY='50px'>
      <VStack align='center'>
        <HStack
          sx={{
            maxWidth: '90vw',
          }}
        >
          <Button
            size='sm'
            colorScheme='blue'
            onClick={() => {
              slide(-400);
            }}
            isDisabled={scrollX === 0}
          >
            {'<'}
          </Button>
          <HStack
            spacing={4}
            overflowX='auto'
            ref={container}
            onScroll={scrollCheck}
            sx={{
              touchAction: 'none',
              scrollBehavior: 'smooth',
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            {datas.map((data: string, index) => (
              <Tag
                flexShrink='0'
                size='md'
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                borderRadius='full'
                variant='solid'
                colorScheme='blue'
              >
                <TagLabel>{data}</TagLabel>
              </Tag>
            ))}
          </HStack>
          <Button
            size='sm'
            colorScheme='blue'
            onClick={() => {
              slide(400);
            }}
            isDisabled={scrollEnd}
          >
            {'>'}
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
}

export const Categories = () => (
  <div>
    <VStack spacing={6} align='flex-start'>
      <Demo datas={categoriesToRender} />
    </VStack>
  </div>
);
