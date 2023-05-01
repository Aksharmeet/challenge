import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

function Index() {
	return (
		<div className='flex xl:divide-[#CCCCCC]  justify-between w-[100%] gap-[50px] flex-wrap pt-6'>
			<LeftPanel />

			<RightPanel />
		</div>
	)
}

export default Index
