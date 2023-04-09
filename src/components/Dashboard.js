import Card from './Card'
import coffee from '../assets/Kaapicino.png'
import CoffeeContext from '../context/CoffeeContext'
import { useContext, useState } from 'react'

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

	const [token, setToken] = useState(0)
	const handleClick = (val) => {
		console.log(val)
		setToken(val)
	}

	return (
		<div>
			<Card
				image={coffee}
				name='South Indian
Filter Kaapi'
				quantity_one='250ml'
				quantity_two='350ml'
				description='Bass Naam Hi Kaapi Hai'
				price_one='140'
				price_two='185'
				// method={handleClick}
			/>
			<Card
				image={coffee}
				name='Americano'
				quantity_one='250ml'
				quantity_two='350ml'
				description='Authentic Double Ristreto Served
With Warm Water
(A.K.A. Up All Night'
				price_one='185'
				price_two='210'
			/>
			<Card
				image={coffee}
				name='Kaapicino'
				quantity_one='250ml'
				quantity_two='350ml'
				description='Traditional Filter Coffee Decoction
Served In A Classic Cappuccino Fashion'
				price_one='215'
				price_two='240'
			/>
			<Card
				image={coffee}
				name='Cafe Latte'
				quantity_one='250ml'
				quantity_two='350ml'
				description='"Looks Cute" Coffee With A Biased Milk
To Milk Foam Ratio And Solid
Coffee Composition'
				price_one='225'
				price_two='250'
			/>
			<Card
				image={coffee}
				name='Cappucino'
				quantity_one='250ml'
				quantity_two='350ml'
				description='"Safest Bet" Coffee With A
Balanced Proportion Of Coffee,
Milk And Silky Milk Foam'
				price_one='225'
				price_two='250'
			/>
			<Card
				image={coffee}
				name='Irish Americano'
				quantity_one='250ml'
				quantity_two='350ml'
				description='"Authentic Double Ristreto
Served With Warm Water
And Some Sweet Irish Syrup'
				price_one='225'
				price_two='250'
			/>
			<Card
				image={coffee}
				name='Cafe Mocha'
				quantity_one='250ml'
				quantity_two='350ml'
				description='"Milk Coffee With Special
Dark Cocoa From Madagascar'
				price_one='235'
				price_two='260'
			/>
		</div>
	)
}
export default Dashboard
