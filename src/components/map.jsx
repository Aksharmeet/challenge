import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import convertIntoNumber from '../utils/convertIntoNumber'

const Map = ({ lat, lng }) => {
	useEffect(() => {
		if (lng && lat) {
			const validLng = convertIntoNumber(lng)
			const validLat = convertIntoNumber(lat)

			mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN
			new mapboxgl.Map({
				container: 'map', // container ID
				style: 'mapbox://styles/mapbox/streets-v12', // style URL
				center: [validLng, validLat], // starting position [lng, lat]
				zoom: 9, // starting zoom
			})
		}
	}, [lat, lng])

	return <div id='map' className='w-[570px] relative right-5 h-[340px] rounded-3xl'></div>
}
export default Map
