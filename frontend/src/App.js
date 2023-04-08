import './App.css'
import axios, * as others from 'axios'

import { useEffect, useState } from 'react'

function App() {
	const [data, setData] = useState()

	useEffect(() => {
		const fetchData = async () => {
			const result = axios.get('http://localhost:8000/')
			const { data } = await result
			setData(data)
			console.log('working')
		}
		fetchData()
	}, [])
	return <div>Working with {data}</div>
}

export default App
