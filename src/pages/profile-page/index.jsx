import Header from './components/header'
import NavPanel from './components/nav-panel'
import Chats from './components/chats'
import Screen from './components/screens'
import { useState } from 'react'

function Index() {
	const [userScreen, setUserScreen] = useState('profile')

	return (
		<section className='w-[100vw] pb-[80px] px-[50px] relative top-[-20px]'>
			<div className='w-[100%] relative top-[60px]'>
				<Header setUserScreen={setUserScreen} userScreen={userScreen} className='' />
			</div>
			<div className='flex gap-0'>
				<NavPanel setUserScreen={setUserScreen} userScreen={userScreen} />
				<Screen userScreen={userScreen} />
			</div>
			<Chats />
		</section>
	)
}

export default Index
