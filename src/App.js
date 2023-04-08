/** @format */
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import Landing from './components/landing';
import Feature from './components/feature';
import Team from './components/team';
import Elite from './components/Elite';
import { useSmartAccountContext } from './Biconomy/SmartAccountContext.tsx';
import { useWeb3AuthContext } from './Biconomy/SocialLoginContext.tsx';
import ConnectButton from './Connect.tsx';
import './App.css';
import { PolybaseProvider } from '@polybase/react';
import { Polybase } from '@polybase/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from './components/logo';

const polybase = new Polybase();
function App() {
  const {
    address,
    loading: eoaLoading,
    userInfo,
    connect,
    disconnect,
    getUserInfo,
    web3Provider,
  } = useWeb3AuthContext();
  const {
    selectedAccount,
    loading: scwLoading,
    setSelectedAccount,
    balance: allTokensBalance,
    // wallet
  } = useSmartAccountContext();
  return (
    <>
      <PolybaseProvider polybase={polybase}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Landing logo={Logo} />}
            />
            <Route
              path="/feature"
              element={<Landing logo={Elite} />}
            />
            <Route
              path="/team"
              element={<Team />}
            />
            <Route
              path="/elite"
              element={<Elite />}
            />
          </Routes>
        </Router>
      </PolybaseProvider>
    </>
    // <div>
    //   <Landing />
    //   <Feature />
    //   <Elite/>
    //   <Team/>
    // </div>
  );
}

export default App;
