import UserDropdown from './userDropdown'

function Index() {
	return (
		<div className='flex justify-between items-center ml-[335px] border-b pb-5 border-stone-300'>
			<div>
				<p className='text-xl font-medium text-[#545454]'>Profile</p>
			</div>
			<div>
				<UserDropdown />
			</div>
		</div>
	)
}

export default Index
