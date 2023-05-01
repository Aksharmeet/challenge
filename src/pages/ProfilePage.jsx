import Header from '../components/profile-page/header'
import NavPanel from '../components/profile-page/NavPanel'
import Chats from '../components/profile-page/Chats'
import Screen from '../components/profile-page/screens'
import { useEffect, useState } from 'react'

function ProfilePage() {
	const [userScreen, setUserScreen] = useState('profile')
	const [dropDownActive, setDropDownActive] = useState(false)
	const [chatWindowActive, setChatWindowActive] = useState(false)

	const inActiveDropDown = () => {
		if (dropDownActive) {
			setDropDownActive(false)
		}
	}

	const inActiveChatWindow = () => {
		if (chatWindowActive) {
			setChatWindowActive(false)
		}
	}

	useEffect(() => {
		const mainSubject = window.document.getElementById('bg-subject')

		mainSubject.addEventListener('click', inActiveDropDown)
		mainSubject.addEventListener('click', inActiveChatWindow)

		return () => {
			mainSubject.removeEventListener('click', inActiveDropDown)
			mainSubject.removeEventListener('click', inActiveChatWindow)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dropDownActive, chatWindowActive])

	return (
		<section className='w-[100vw] pb-[80px] px-[20px] relative top-[-34px] max-w-[1400px] mx-auto'>
			<div className='w-[100%] relative top-[70px]'>
				<Header userScreen={userScreen} dropDownActive={dropDownActive} setDropDownActive={setDropDownActive} />
			</div>
			<div className='flex gap-0'>
				<NavPanel setUserScreen={setUserScreen} userScreen={userScreen} />
				<Screen userScreen={userScreen} />
			</div>
			<div className='fixed bottom-0 right-16 z-10'>
				<Chats chatWindowActive={chatWindowActive} setChatWindowActive={setChatWindowActive} />
			</div>
			<div className='w-full h-[100vh] absolute top-0 right-0 left-0' id='bg-subject' />
		</section>
	)
}

export default ProfilePage
