import UpArrow from '../../../../assets/svgs/upArrow.svg'
import ChatLeft from '../../../../assets/svgs/chatLeft.svg'
import { useEffect, useState } from 'react'

function Index() {
	const [toggleChat, setToggleChat] = useState(false)

	const users = JSON.parse(localStorage.getItem('users'))

	return (
		<div className='w-[270px]'>
			<div
				className='bg-[#2C65C8] rounded-t-lg px-5 py-3  text-white flex items-center justify-between'
				onClick={() => setToggleChat((prev) => !prev)}
			>
				<div className='flex items-start gap-3'>
					<img src={ChatLeft} alt='chat icon' className='w-5 h-5' />
					<h3 className='mt-[-4px]'>Chats</h3>
				</div>
				<img
					src={UpArrow}
					alt='up arrow icon'
					className='w-4 h-4 transition-transform duration-500'
					style={{ transform: toggleChat ? 'rotate(180deg)' : '' }}
				/>
			</div>

			<div className='transition-all ease-in-out duration-500 overflow-scroll bg-white' style={{ maxHeight: toggleChat ? '300px' : '0' }}>
				<div className='py-2'>
					{users.map((user, id) => (
						<div className='flex items-center gap-3 px-5 py-1 hover:bg-[#F2F2F2]  cursor-pointer'>
							<img src={user.profilepicture} alt='profile' className='w-7 h-7 rounded-full' />
							<div className='flex justify-between items-center w-[100%]'>
								<div>
									<h3 className='font-light text-sm text-[#4A4A4A]'>{user.name}</h3>
								</div>
								{/* green or gray dot based on the id */}
								{id % 2 === 0 ? (
									<div className='flex items-center gap-1'>
										<div className='w-2 h-2 rounded-full bg-[#2AC769]'></div>
									</div>
								) : (
									<div className='flex items-center gap-1'>
										<div className='w-2 h-2 rounded-full bg-[#B3B3B3]'></div>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Index
