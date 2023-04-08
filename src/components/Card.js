function Card({ image, name, quantity, description, price }) {
	return (
		<div className='container'>
			<div className='img'>
				<img className='coffee-img' src={image} alt='' />
			</div>

			<div className='content'>
				<p className='title'>{name}</p>
				<p className='quantity'>Quantity: {quantity} ML</p>
				<p className='type'> 🌟 Bestseller</p>
				<p className='description'>{description}</p>
				<div className='final'>
					<p className='price'>Rs. {price}</p>
					<button className='cart'> Add to Cart</button>
				</div>
			</div>
		</div>
	)
}
export default Card
