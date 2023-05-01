import React, { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes as Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'

const ProfilePage = React.lazy(() => import('./pages/ProfilePage'))
const NoMatch = React.lazy(() => import('./pages/404'))

export default function Routes() {
	const [crrUser, setCrrUser] = React.useState(null)

	return (
		<>
			<BrowserRouter>
				<Suspense fallback={<code>Loading...</code>}>
					<Switch>
						<Route path='/' element={<HomePage setCrrUser={setCrrUser} />} />
						<Route path='/profile-page' element={<ProfilePage crrUser={crrUser} setCrrUser={setCrrUser} />} />
						<Route path='*' element={<NoMatch />} />
						<Route path='/home' element={<Navigate to='/' replace />} />
					</Switch>
				</Suspense>
			</BrowserRouter>
		</>
	)
}
