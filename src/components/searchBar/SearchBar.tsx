'use client'

import { Button, Container, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

export function SearchBar() {
  return (
    <Container
      maxWidth='900px'
      paddingY='10px'
    >
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          placeholder='Search for detail'
        />
        <InputRightElement width='4.5rem'>
          <Button
            h='1.75rem'
            size='sm'
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Container>
  )
}
