import Gallary from './gallery'
import Posts from './posts'
import ToDO from './to-do'
import Profile from './profile'

function Index({ userScreen }) {
	console.log(userScreen)
	const screens = {
		profile: <Profile />,
		posts: <Posts />,
		gallery: <Gallary />,
		todo: <ToDO />,
	}

	return <div className='w-[100%] h-[100%] top-20 relative'>{screens[userScreen]}</div>
}

export default Index
