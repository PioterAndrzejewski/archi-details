'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import { Navigation } from '@/components/navigation/Navigation'
import { SearchBar } from '@/components/searchBar/SearchBar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider>
            <Navigation />
            <SearchBar />
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
