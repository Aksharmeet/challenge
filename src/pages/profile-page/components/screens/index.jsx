import Gallary from './gallery'
import Posts from './posts'
import ToDO from './to-do'
import Profile from './profile'

function Index({ userScreen }) {
	const screens = {
		profile: <Profile />,
		posts: <Posts />,
		gallery: <Gallary />,
		toDo: <ToDO />,
	}

	return <div className='w-[100%] h-[100%]'>{screens[userScreen]}</div>
}

export default Index
