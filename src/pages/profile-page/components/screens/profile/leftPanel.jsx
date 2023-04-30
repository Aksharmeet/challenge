function LeftPanel() {
	const user = JSON.parse(localStorage.getItem('crrUser'))

	return (
		<div className='flex flex-col w-[45%] justify-center items-center py-5  border-r gap-3 text-[#545454] px-8'>
			<img src={user.profilepicture} alt='profile' width='200' height='200' className='rounded-full' />
			<p className='text-[22px] font-medium'>{user.name}</p>
			<div>
				<div className='flex justify-center items-center gap-3 pb-5 border-b'>
					<div className='text-right text-[#B3B3B3]  font-light text-[20px] flex flex-col gap-3'>
						<p>Username </p>
						<p>e-mail </p>
						<p>Phone </p>
						<p>Website </p>
					</div>
					<div className='text-right text-[#B3B3B3] font-light text-[20px] flex flex-col gap-3'>
						<p>: </p>
						<p>: </p>
						<p>:</p>
						<p>: </p>
					</div>
					<div className='text-[20px] font-medium flex flex-col gap-3'>
						<p>{user.username}</p>
						<p>{user.email}</p>
						<p>{user.phone}</p>
						<p>{user.website}</p>
					</div>
				</div>
				<p className='text-center text-[#B3B3B3] font-light text-[22px] mt-2'>Company</p>
				<div className='flex justify-center items-top gap-3 mt-1'>
					<div className='text-right text-[#B3B3B3]  font-light text-[20px] flex flex-col gap-3'>
						<p>Name </p>
						<p>catchphrase </p>
						<p className='mt-8'>bs </p>
					</div>
					<div className='text-right text-[#B3B3B3] font-light text-[20px] flex flex-col gap-3'>
						<p>: </p>
						<p>: </p>
						<p className='mt-8'>:</p>
					</div>
					<div className='text-[20px] font-medium flex flex-col gap-3'>
						<p>{user.company.name}</p>
						<p>{user.company.catchPhrase}</p>
						<p>{user.company.bs}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LeftPanel
