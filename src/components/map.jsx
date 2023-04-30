import { Loader } from 'google-maps'
import { useEffect } from 'react'
// or const {Loader} = require('google-maps'); without typescript

const Map = ({ lat, lng }) => {
	const options = {
		/* todo */
	}
	const loader = new Loader('AIzaSyD7NFrGrZ8TdzLZdrHtHw7y8eKb-NR2uQ0', options)

	useEffect(() => {
		const getGoogle = async () => {
			const google = await loader.load()
			new google.maps.Map(document.getElementById('map'), {
				center: { lat: parseInt(lat), lng: parseInt(lng) },
				zoom: 8,
				disableDefaultUI: true,
				draggable: false,
				zoomControl: true,
			})
		}
		getGoogle()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lat, lng])

	return <div id='map' className='w-[570px] relative right-5 h-[340px] rounded-3xl'></div>
}
export default Map
