import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function HomePage() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios('https://panorbit.in/api/users.json')
			setUsers(data.users)
			localStorage.setItem('users', JSON.stringify(data.users))
		}
		fetchData()

		return () => {
			// cleanup
		}
	}, [])

	const navigate = useNavigate()

	const handleUserClick = (user) => {
		localStorage.setItem('crrUser', JSON.stringify(user))
		navigate('/profile-page')
	}

	return (
		<section className='bg-landing-bg bg-contain w-[100vw] h-[100vh] bg-no-repeat flex justify-center items-center'>
			<div className='w-full max-w-[35rem] bg-white border border-gray-200 rounded-3xl shadow-xl  m-5 overflow-hidden'>
				<div className='flex items-center justify-between bg-stone-100 p-10'>
					<h5 className='text-xl font-medium text-[#545454] leading-none text-gray-90 text-center w-[100%]'>Select an account</h5>
				</div>
				<div className='flow-root pb-5 pt-0 '>
					<div role='list' className='h-96 overflow-scroll'>
						{users.length > 0 ? (
							users.map((user) => (
								<div
									className='py-[13px] cursor-pointer border-b-slate-200 border-b hover:bg-slate-50 transition-colors mx-7'
									key={user.id}
									onClick={() => handleUserClick(user)}
								>
									<div className='flex items-center space-x-3 relative'>
										<div className='flex-shrink-0 absolute z-10'>
											{user.profilepicture && (
												<img className='w-8 h-8 rounded-full' src={user.profilepicture} alt='Bonnie' width='32px' height='32px' />
											)}
										</div>
										<div className='w-[32px] h-[32px] rounded-full bg-slate-300 absolute left-[-12px]' />
										<div className='flex-1 min-w-0 relative left-8'>
											<p className=' font-light text-base text-[#4A4A4A] truncate'>{user.name}</p>
										</div>
									</div>
								</div>
							))
						) : (
							<div className='flex w-full h-full justify-center items-center'>
								<p className='font-bold text-stone-400 text-3xl'>Loading...</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomePage
