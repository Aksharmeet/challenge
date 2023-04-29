import Header from './components/header'
import NavPanel from './components/nav-panel'
import Chats from './components/chats'
import Screen from './components/screens'
import { useState } from 'react'

function Index() {
	const [userScreen, setUserScreen] = useState('profile')
	return (
		<section className='w-[100vw] h-[100vh] flex px-[60px] items-center justify-center'>
			<NavPanel setUserScreen={setUserScreen} userScreen={userScreen} />
			<Header setUserScreen={setUserScreen} userScreen={userScreen} />
			<Screen userScreen={userScreen} />
			<Chats />
		</section>
	)
}

export default Index
