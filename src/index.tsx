import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, theme } from '@chakra-ui/react'; 
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/playfair-display';

const myCustomTheme = extendTheme({
    fonts: {
      heading: 'Playfair Display',
    }
 })

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ChakraProvider theme={myCustomTheme}> 
    <App />
  </ChakraProvider>
);
