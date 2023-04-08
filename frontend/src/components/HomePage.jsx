import CoffeeContext from '../context/CoffeContext'
import { useContext } from 'react'

function HomePage() {
	const { data } = useContext(CoffeeContext)

	return <div>HomePage and {data}</div>
}
export default HomePage
