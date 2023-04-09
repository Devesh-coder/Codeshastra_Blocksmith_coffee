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
	const { data, getProducts } = useContext(CoffeeContext)
	getProducts()
	console.log(data)

	return (
		<div>
			{data.map(
				(product) => (
					console.log(Object.keys(product.price)),
					(
						<Card
							image={coffee}
							name={product.name}
							quantity_one={Object.keys(product.price)[0]}
							quantity_two={Object.keys(product.price)[1]}
							description={product.description}
							price_one={Object.values(product.price)[0]}
							price_two={Object.values(product.price)[1]}
						/>
					)
				),
			)}
		</div>
	)
}
export default Dashboard
