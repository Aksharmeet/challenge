import UserDropdown from './userDropdown'

function Index({ userScreen, dropDownActive, setDropDownActive }) {
	return (
		<div className='flex justify-between items-center ml-[295px] border-b pb-7 border-stone-300'>
			<div>
				<p className='text-xl font-medium text-[#545454]'>{userScreen.slice(0, 1).toUpperCase() + userScreen.slice(1)}</p>
			</div>
			<div>
				<UserDropdown dropDownActive={dropDownActive} setDropDownActive={setDropDownActive} />
			</div>
		</div>
	)
}

export default Index
