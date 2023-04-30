import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserDropdown({ dropDownActive, setDropDownActive }) {
	const user = JSON.parse(localStorage.getItem('crrUser'))
	const users = JSON.parse(localStorage.getItem('users'))

	const [next2User, setNext2User] = useState([])

	const getNext2users = () => {
		if (user.id === users.length) {
			setNext2User([users[0], users[1]])
		} else if (user.id === users.length - 1) {
			setNext2User([users[users.length - 1], users[0]])
		} else {
			setNext2User([users[user.id], users[user.id + 1]])
		}
	}

	useEffect(() => {
		getNext2users()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const navigate = useNavigate()
	const logout = () => {
		localStorage.removeItem('crrUser')
		navigate('/')
	}

	const changeCrrUser = (user) => {
		localStorage.setItem('crrUser', JSON.stringify(user))
		window.location.reload()
	}

	return (
		<div>
			<div className='flex items-center gap-3 cursor-pointer' onClick={() => setDropDownActive((prev) => !prev)}>
				{user.profilepicture && <img src={user.profilepicture} alt='profile' width='40' height='40' className='rounded-full' />}
				<p className='text-[#494949]'>{user.name}</p>
			</div>
			<div
				className='absolute top-[74px] right-[0px] z-50 overflow-hidden rounded-3xl transition-all duration-300 bg-white'
				style={{
					maxHeight: dropDownActive ? '' : 0,
					boxShadow: dropDownActive ? 'rgba(14, 30, 37, 0.07) 0px 2px 4px 0px, rgba(14, 30, 37, 0.07) 0px 2px 16px 15px' : '',
				}}
			>
				<div>
					<div className='flex flex-col divide-y items-center justify-center px-7 pt-7 text-center '>
						<div className='flex gap-2 flex-col justify-center items-center'>
							{user.profilepicture && <img src={user.profilepicture} alt='profile' width='90' height='90' className='rounded-full' />}
							<p className='text-[#4A4A4A]'>{user.name}</p>
							<p className='text-[#9A9A9A] font-light mt-[-5px]'>{user.email}</p>
						</div>
						<div className='divide-y mt-3'>
							{next2User.length > 0
								? next2User.map((user) => {
										return (
											<div
												className='flex gap-2 w-60  justify-center items-center py-3 cursor-pointer'
												onClick={() => changeCrrUser(user)}
												key={user.id}
											>
												{user.profilepicture && <img src={user.profilepicture} alt='profile' width='30' height='30' className='rounded-full' />}
												<p className='text-sm text-[#4A4A4A] font-light'>{user.name}</p>
											</div>
										)
								  })
								: ''}
						</div>
					</div>
					<div className='flex justify-center' onClick={() => logout()}>
						<button className='bg-[#D55151] text-white  py-1 px-4 rounded-3xl mb-10 mt-2 text-lg font-medium mx-auto'>Sign out</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserDropdown
