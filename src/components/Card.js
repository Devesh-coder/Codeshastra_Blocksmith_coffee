import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function Card({
	image,
	name,
	quantity_one,
	quantity_two,
	description,
	price_one,
	price_two,
}) {
	let boxVariant = {}
	const isMobile = window.innerWidth < 700

	if (!isMobile) {
		boxVariant = {
			visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
			hidden: { opacity: 0, y: 100, transition: { duration: 0.4 } },
		}
	} else {
		boxVariant = {
			visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
			hidden: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
		}
	}

	const control = useAnimation()
	const [ref, inView] = useInView()

	useEffect(() => {
		if (inView) {
			control.start('visible')
		}
	}, [control, inView])
	console.log(description.length)
	return (
		<AnimatePresence>
			<motion.div
				ref={ref}
				variants={boxVariant}
				initial='hidden'
				animate={control}
				exit='hidden'
				className='container'
			>
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
			</motion.div>
		</AnimatePresence>
	)
}
export default Card
