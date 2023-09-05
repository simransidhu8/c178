mapboxgl.accessToken = 'pk.eyJ1IjoicmFzaG1pdGhhMzIiLCJhIjoiY2xtM3BxZ21pMHpnZjNqczZ3cXNzeWlocSJ9.fJupKJNbdcyLbGEzZGXrBQ'

var longitude = 88.36
var latitude = 22.79

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 16
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccurancy: true
        },
        trackUserLocation: true
    })
)

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
)