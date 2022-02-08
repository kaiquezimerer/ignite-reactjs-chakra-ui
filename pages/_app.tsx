import React from "react";
import { AppProps } from 'next/app';
import dynamic from "next/dynamic";
import { ChakraProvider } from '@chakra-ui/react';

import 'styles/global.css';
import { theme } from 'styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

// Disable SSR
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
