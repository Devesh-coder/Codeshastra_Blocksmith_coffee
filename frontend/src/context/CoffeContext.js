import { createContext, useState, useEffect } from 'react'
import axios, * as others from 'axios'

const CoffeeContext = createContext()

export const CoffeeProvider = ({ children }) => {
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

	return (
		<CoffeeContext.Provider value={{ data }}>{children}</CoffeeContext.Provider>
	)
}

export default CoffeeContext
