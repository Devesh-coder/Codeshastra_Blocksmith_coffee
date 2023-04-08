/** @format */

function Leaderboard() {
	return (
		<div className='mx-auto max-w-md py-100 sm:py-100 lg:py-40  '>
			<div className='text-center'>
				<table className='table-fixed '>
					<thead>
						<tr>
							<th>Sr No.</th>
							<th>Users</th>
							<th>Tokens</th>
						</tr>
					</thead>
					<tbody>
						<tr className='lg:py-20 px:40'>
							<td>1</td>
							<td>Malcolm Lockyer</td>
							<td>1961</td>
						</tr>
						<tr className='lg:py-20 px:40'>
							<td>2</td>
							<td>The Eagles</td>
							<td>1972</td>
						</tr>
						<tr className='lg:py-20 px:40'>
							<td>3</td>
							<td>Earth, Wind, and Fire</td>
							<td>1975</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
export default Leaderboard
