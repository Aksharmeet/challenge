import React, { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes as Switch, useLocation } from 'react-router-dom'

import HomePage from './pages/home-page'

const ProfilePage = React.lazy(() => import('./pages/profile-page'))

function NoMatch() {
	const location = useLocation()

	return (
		<div>
			<h3>Error 404</h3>
			<p>
				No match for <code>{location.pathname}</code>
			</p>
		</div>
	)
}

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
