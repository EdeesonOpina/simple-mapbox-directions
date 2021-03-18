mapboxgl.accessToken = 'pk.eyJ1IjoiZWRlZXNvbm9waW5hIiwiYSI6ImNrOGZ0dDFwdzA4M2gzbXMwMzA1MTc2eGMifQ.duDd70c9Ql0A5pT_Fp75pA';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { 
	enableHighAccuracy:true 
})

// if the map finds the correct value if allowed location access on browser
function successLocation(position) {
	console.log(position)
	setupMap([position.coords.longitude, position.coords.latitude])
}

// if the map does not find a correct value on successLocation
function errorLocation() {
	setupMap([-2.24, 53.48])
}

// core map function
function setupMap(center) {

	// setting of map to #map
	var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: center,
	zoom: 14
	})

	// directions to put on top right
	var directions = new MapboxDirections({
	  accessToken: mapboxgl.accessToken, // the access token from line 1
	  unit: 'metric',
	  profile: 'mapbox/walking'
	});
	map.addControl(directions, 'top-right');

	// navigation control to put on top right below directions
	var nav = new mapboxgl.NavigationControl();
	map.addControl(nav, 'top-right');
}
