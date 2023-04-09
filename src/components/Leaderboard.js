/** @format */

import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function LeaderBoard() {
	return (
		<div className='App' id='main'>
			<Board></Board>
		</div>
	)
}
