import React from 'react'
import Map from '../../../../../components/map'

function RightPanel() {
	const user = JSON.parse(localStorage.getItem('crrUser'))

	return (
		<div className='flex flex-col w-[55%] py-5 gap-3 text-[#545454] px-8'>
			<div>
				<h3 className=' text-[#B3B3B3]  font-light text-[20px] mb-3 relative right-9'>Address:</h3>
				<div className='flex gap-3 pb-5'>
					<div className='text-right text-[#B3B3B3]  font-light text-[20px] flex flex-col gap-3'>
						<p>Street</p>
						<p>Suite</p>
						<p>City</p>
						<p>Zipcode</p>
					</div>
					<div className='text-right text-[#B3B3B3] font-light text-[20px] flex flex-col gap-3'>
						<p>:</p>
						<p>:</p>
						<p>:</p>
						<p>:</p>
					</div>
					<div className='text-[20px] font-medium flex flex-col gap-3'>
						<p>{user.address.street}</p>
						<p>{user.address.suite}</p>
						<p>{user.address.city}</p>
						<p>{user.address.zipcode}</p>
					</div>
				</div>
				<Map lat={user.address.geo.lat} lng={user.address.geo.lng} />
				<div className='flex gap-3 justify-end mt-3'>
					<p className='text-sm text-zinc-400'>
						Lat:<span className='text-black font-medium text-sm pl-1'>{user.address.geo.lat}</span>
					</p>
					<p className='text-sm text-zinc-400'>
						Lng:<span className='text-black font-medium text-sm pl-1'>{user.address.geo.lng}</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default RightPanel
