import { createContext, useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const CoffeeContext = createContext()

export const CoffeeProvider = ({ children }) => {
	const [db, setDb] = useState(null)
	const [data, setData] = useState([])
	const [userLearderbordData, setUserLearderbordData] = useState([])
	const [isLoading, setIsLoading] = useState(true)

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
		console.log('yoyoyoyoyoyo')
		setIsLoading(false)

		async function getProducts(db, category, subCategory) {
			const citiesCol = await collection(
				db,
				'products/' + category + '/' + subCategory + '/',
			)
			const citySnapshot = await getDocs(citiesCol)
			citySnapshot.docs.map(async (doc) => {
				console.log(doc.data())
				await data.push(doc.data())
			})
		}
		getProducts(db, 'coffee', 'hot')
		// getUsers(db)
	}, [])

	const getUsers = async (db) => {
		const citiesCol = collection(db, 'users')
		const citySnapshot = await getDocs(citiesCol)
		// citySnapshot.docs.map((doc) => {
		// 	console.log(doc.data())
		// 	userLearderbordData.push(doc.data())
		// })

		console.log(citySnapshot.docs)
	}

	return (
		<CoffeeContext.Provider value={{ data }}>{children}</CoffeeContext.Provider>
	)
}

export default CoffeeContext
