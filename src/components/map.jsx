import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl' // or "const mapboxgl = require('mapbox-gl');"
// or const {Loader} = require('google-maps'); without typescript

const Map = ({ lat, lng }) => {
	const convertIntoNumber = (str) => {
		return str.replace(/(?!^)-|[^\d.-]+/g, '')
	}
	useEffect(() => {
		if (lng && lat) {
			const validLng = convertIntoNumber(lng)
			const validLat = convertIntoNumber(lat)

			mapboxgl.accessToken = 'pk.eyJ1IjoiYWtzaGFybWVldCIsImEiOiJja3JxMzl2Z3IwNG13MnBvMGxoaWJrZmRqIn0.WFDL-rnY-MEbbXii3fae5A'
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
