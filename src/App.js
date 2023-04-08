import React from 'react'
import Landing from './components/landing'
import Feature from './components/feature'
import Team from './components/team'
import Elite from './components/Elite'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/team" element={<Team />} />
        <Route path="/elite" element={<Elite />} />
      </Routes>
    </Router>
    
    
    // <div>
    //   <Landing />
    //   <Feature />
    //   <Elite/>
    //   <Team/>
    // </div>
  )
}

export default App