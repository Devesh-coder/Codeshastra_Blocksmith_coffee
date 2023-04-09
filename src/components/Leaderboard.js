/** @format */

import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function Leaderboard() {
	let boxVariant_left = {}
	boxVariant_left = {
		visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
		hidden: { opacity: 0, x: 100, transition: { duration: 0.4 } },
	}
	let boxVariant_right = {}
	boxVariant_right = {
		visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
		hidden: { opacity: 0, x: -100, transition: { duration: 0.4 } },
	}

	const control = useAnimation()
	const [ref, inView] = useInView()

	useEffect(() => {
		if (inView) {
			control.start('visible')
		}
	}, [control, inView])
	return (
		<AnimatePresence>
			<div className='board'>
				<motion.div
					ref={ref}
					variants={boxVariant_left}
					initial='hidden'
					animate={control}
					exit='hidden'
					className='beverage'
				>
					<div class='flex flex-col'>
						<div class='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
							<div class='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
								<div class='overflow-hidden'>
									<table class='min-w-full'>
										<thead class='bg-gray-200 border-b'>
											<tr>
												<th
													scope='col'
													class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													#
												</th>
												<th
													scope='col'
													class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													First
												</th>
												<th
													scope='col'
													class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													Last
												</th>
												<th
													scope='col'
													class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													Handle
												</th>
											</tr>
										</thead>
										<tbody>
											<tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
												<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													1
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Mark
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Otto
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													5000
												</td>
											</tr>
											<tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
												<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													2
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Jacob
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Thornton
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													4800
												</td>
											</tr>
											<tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
												<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													3
												</td>
												<td
													colspan='2'
													class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'
												>
													Larry
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													4500
												</td>
											</tr>
											<tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
												<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													4
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Whitney
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Austin
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													@mdo
												</td>
											</tr>
											<tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
												<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													5
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Ted
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Obama
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													@fat
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
				{/* ------------------------------------------------------------------- */}
				<div className='main'>
					<div class='flex flex-col'>
						<div class='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
							<div class='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
								<div class='overflow-hidden'>
									<table class='min-w-full'>
										<thead class='bg-gray-200 border-b'>
											<tr>
												<th
													scope='col'
													class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													#
												</th>
												<th
													scope='col'
													class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													First
												</th>
												<th
													scope='col'
													class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													Last
												</th>
											</tr>
										</thead>
										<tbody>
											<tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
												<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													1
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Mark
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Otto
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													4800
												</td>
											</tr>
											<tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
												<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													2
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Jacob
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Thornton
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													4500
												</td>
											</tr>
											<tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
												<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													3
												</td>
												<td
													colspan='2'
													class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'
												>
													Larry
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													4200
												</td>
											</tr>
											<tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
												<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													4
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Whitney
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Austin
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													4000
												</td>
											</tr>
											<tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
												<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													5
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Ted
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Obama
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													3800
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<motion.div
					ref={ref}
					variants={boxVariant_right}
					initial='hidden'
					animate={control}
					exit='hidden'
					className='food'
				>
					<div class='flex flex-col'>
						<div class='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
							<div class='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
								<div class='overflow-hidden'>
									<table class='min-w-full'>
										<thead class='bg-gray-200 border-b'>
											<tr>
												<th
													scope='col'
													class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													#
												</th>
												<th
													scope='col'
													class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													First
												</th>
												<th
													scope='col'
													class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													Last
												</th>
												<th
													scope='col'
													class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													Handle
												</th>
											</tr>
										</thead>
										<tbody>
											<tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
												<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													1
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Mark
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Otto
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													@mdo
												</td>
											</tr>
											<tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
												<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													2
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Jacob
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Thornton
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													@fat
												</td>
											</tr>
											<tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
												<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													3
												</td>
												<td
													colspan='2'
													class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'
												>
													Larry
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													@twitter
												</td>
											</tr>
											<tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
												<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													4
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Whitney
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Austin
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													@mdo
												</td>
											</tr>
											<tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
												<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													5
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Ted
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													Obama
												</td>
												<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													@fat
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</AnimatePresence>
	)
}

export default Leaderboard
