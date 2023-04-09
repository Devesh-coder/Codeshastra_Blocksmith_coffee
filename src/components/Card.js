function Card({
	image,
	name,
	quantity_one,
	quantity_two,
	description,
	price_one,
	price_two,
}) {
	console.log(description.length)
	return (
		<div className='container'>
			<div className='img'>
				<img className='coffee-img' src={image} alt='' />
			</div>

			<div className='content'>
				<p className='title'>{name}</p>
				<p className='type'> 🌟 Bestseller</p>
				<p className='description'>
					{description.substring(0, Math.min(description.length, 50))}
				</p>
				<div className='final'>
					<div className='first'>
						<p className='quantity'>{quantity_one} ML</p>
						<p className='price'>Rs. {price_one}</p>
					</div>
					<div className='second'>
						<p className='quantity'>{quantity_two} ML</p>
						<p className='price'>Rs. {price_two}</p>
					</div>
					<div className='btn'>
						<button className='cart'> Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Card
