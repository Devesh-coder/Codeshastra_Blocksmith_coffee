/** @format */

import React from 'react';
import Landing from './components/landing';
import Feature from './components/feature';
import Team from './components/team';
import Elite from './components/Elite';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from './components/logo';

function App() {
  return (
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

    // <div>
    //   <Landing />
    //   <Feature />
    //   <Elite/>
    //   <Team/>
    // </div>
  );
}

export default App;
