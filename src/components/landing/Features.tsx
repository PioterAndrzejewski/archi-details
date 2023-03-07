'use client';

import { ReactElement } from 'react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import {
  Box,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

interface FeatureProps {
  title: string;
  text: string;
  image: ReactElement;
}

const featuresList = [
  {
    id: 0,
    image: <Icon as={FcAssistant} w={10} h={10} />,
    title: 'Editable DWG',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, omnis.',
  },
  {
    id: 1,
    image: <Icon as={FcDonate} w={10} h={10} />,
    title: 'Ratings and comments',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, omnis.',
  },
  {
    id: 2,
    image: <Icon as={FcInTransit} w={10} h={10} />,
    title: 'Over 1000+ Details',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, omnis.',
  },
];

const Feature = ({ title, text, image }: FeatureProps) => (
  <Stack>
    <Flex
      w={16}
      h={16}
      align='center'
      justify='center'
      color='white'
      rounded='full'
      bg='gray.100'
      mb={1}
    >
      {image}
    </Flex>
    <Text fontWeight={600}>{title}</Text>
    <Text color='gray.600'>{text}</Text>
  </Stack>
);

export function Features() {
  return (
    <Container minWidth='100%' bg='gray.100' paddingY='100px'>
      <Container maxW='1400px' color='white'>
        <Box p={4}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {featuresList.map((feature) => (
              <Feature
                key={feature.id}
                image={feature.image}
                title={feature.title}
                text={feature.text}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Container>
  );
}
