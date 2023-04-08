import Card from './Card'
import coffee from '../assets/Kaapicino.png'
import CoffeeContext from '../context/CoffeeContext'
import { useContext } from 'react'

function Dashboard() {
	const products = [
		{
			image: coffee,
			name: 'Kaapicino',
			quantity: 10,
			description: 'A delicious coffee',
			price: 250,
		},
	]
	const { data } = useContext(CoffeeContext)
	console.log(data)

	return (
		<div>
			{data.map((product) => (
				<Card
					// image={product.image}
					name={product.name}
					quantity={product.quantity}
					description={product.description}
					price={product.price[1]}
				/>
			))}
		</div>
	)
}
export default Dashboard
