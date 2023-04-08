/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Web3AuthProvider } from './Biconomy/SocialLoginContext.tsx';
import { SmartAccountProvider } from './Biconomy/SmartAccountContext.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Web3AuthProvider>
      <SmartAccountProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </SmartAccountProvider>
    </Web3AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
