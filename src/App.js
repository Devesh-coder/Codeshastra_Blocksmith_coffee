/** @format */

import React from 'react'
import Landing from './components/landing'
import Feature from './components/feature'
import Team from './components/team'
import Elite from './components/Elite'
import Leaderboard from './components/Leaderboard'
import Admin from './components/admin'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Logo from './components/logo'
import Dashboard from './components/Dashboard'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Landing logo={Logo} />} />
				<Route path='/feature' element={<Landing logo={Elite} />} />
				<Route path='/team' element={<Team />} />
				<Route path='/elite' element={<Elite />} />
				<Route path='/leaderboard' element={<Landing logo={Leaderboard} />} />
				<Route path='/admin' element={<Admin />} />
				<Route path='/dashboard' element={<Dashboard />} />
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
