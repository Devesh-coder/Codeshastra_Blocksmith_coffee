import Card from './Card'
import coffee from '../assets/Kaapicino.png'

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

	return (
		<div>
			Dashboard
			{products.map((product) => (
				<Card
					image={product.image}
					name={product.name}
					quantity={product.quantity}
					description={product.description}
					price={product.price}
				/>
			))}
		</div>
	)
}
export default Dashboard
