import UserDropdown from './userDropdown'

function Index() {
	return (
		<div className='absolute w-[70%] flex justify-between items-center left-[385px] top-12'>
			<div>
				<p>Profile</p>
			</div>
			<div>
				<UserDropdown />
			</div>
		</div>
	)
}

export default Index
