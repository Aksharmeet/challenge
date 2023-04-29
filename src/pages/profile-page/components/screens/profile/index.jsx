import LeftPanel from './leftPanel'
import RightPanel from './rightPanel'

function Index() {
	return (
		<div className='flex divide-[#CCCCCC] justify-between w-[100%] top-20 relative'>
			<LeftPanel />
			<RightPanel />
		</div>
	)
}

export default Index
