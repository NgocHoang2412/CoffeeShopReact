import React from 'react';
import {useGoogleMaps} from 'react-hook-google-maps';

const apiKey = "AIzaSyDJaUe_hAUSWSoz9nJAviquxUxQTj52HzA";
function StoreScreen() {

  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    apiKey,
    // NOTE: even if you change options later
    {
      center: { lat: 10.776530, lng: 106.700981 },
      zoom: 16,
    },
  );
  console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
  console.log(google);// google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)

  return (
    <div ref={ref} google={google} map={map} style={{ height: '100vh', width: '100%' }}>
    </div>
  );
}
export default StoreScreen;
