import { createContext, useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const CoffeeContext = createContext()

export const CoffeeProvider = ({ children }) => {
	const [db, setDb] = useState(null)
	const [data, setData] = useState([])

	useEffect(() => {
		async function coffee() {
			const firebaseConfig = {
				apiKey: 'AIzaSyCSiao98xJT4hu3UOIr1l0b9cbSomRgc80',
				authDomain: 'arduino-ae46c.firebaseapp.com',
				databaseURL: 'https://arduino-ae46c-default-rtdb.firebaseio.com',
				projectId: 'arduino-ae46c',
				storageBucket: 'arduino-ae46c.appspot.com',
				messagingSenderId: '54626434735',
				appId: '1:54626434735:web:c8fc1829c3a74982a11e5a',
			}

			// Initialize Firebase
			const app = initializeApp(firebaseConfig)
			const db = getFirestore(app)
			setDb(db)
		}
		coffee()
	}, [])

	const getProducts = async (db, category, subCategory) => {
		const citiesCol = collection(
			db,
			'products/' + category + '/' + subCategory + '/',
		)
		const citySnapshot = await getDocs(citiesCol)
		citySnapshot.docs.map((doc) => {
			console.log(doc.data())
			// setData(...data, doc.data())
			data.push(doc.data())
		})
	}
	getProducts(db, 'coffee', 'hot')
	// console.log(data.length)

	return (
		<CoffeeContext.Provider value={{ getProducts, data }}>
			{children}
		</CoffeeContext.Provider>
	)
}

export default CoffeeContext
