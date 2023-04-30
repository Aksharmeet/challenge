import { useState, useEffect } from 'react'

function Index({ userScreen, setUserScreen }) {
	const animateValues = {
		profile: '28vh',
		posts: '34.5vh',
		gallery: '41.5vh',
		todo: '47.5vh',
	}
	const handleScreenChange = (screen) => {
		setUserScreen(screen)
	}

	const [crrAnimateValue, setCrrAnimateValue] = useState(0)

	useEffect(() => {
		setCrrAnimateValue(animateValues[userScreen])
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userScreen])

	return (
		<section className='bg-gradient-to-bl from-[#375BC8] to-[#6039C8] h-[1100px]  p-10 rounded-3xl w-[250px] min-w-[250px]'>
			<div className=' text-lg font-normal text-[#A5A5E5] flex flex-col justify-center h-[100%] relative '>
				<div className={`py-3 cursor-pointer ${userScreen === 'profile' ? 'text-[#fff]' : ''}`} onClick={() => handleScreenChange('profile')}>
					<p>Profile</p>
				</div>
				<div
					className={`py-3 border-t cursor-pointer border-[#A5A5E5] ${userScreen === 'posts' ? 'text-[#fff]' : ''}`}
					onClick={() => handleScreenChange('posts')}
				>
					<p>Posts</p>
				</div>
				<div
					className={`py-3 border-t cursor-pointer border-[#A5A5E5] ${userScreen === 'gallery' ? 'text-[#fff]' : ''}`}
					onClick={() => handleScreenChange('gallery')}
				>
					<p>Gallery</p>
				</div>
				<div
					className={`py-3 border-t cursor-pointer border-[#A5A5E5] ${userScreen === 'todo' ? 'text-[#fff]' : ''}`}
					onClick={() => handleScreenChange('todo')}
				>
					<p>ToDo</p>
				</div>
				<div
					className={`w-12 h-8 rounded-full flex items-center justify-center  bg-white absolute right-[-60px]  transition-all`}
					style={{ top: `${crrAnimateValue}` }}
				>
					<div className='bg-right-arrow w-5 h-5 mr-4'></div>
				</div>
			</div>
		</section>
	)
}

export default Index
