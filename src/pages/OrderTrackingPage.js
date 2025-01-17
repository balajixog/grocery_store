import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import '../css/OrderTrackingPage.css';

// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoidmlzaGFsbi0yMDA0IiwiYSI6ImNsejYxYzk4ODB3OHgyaXM5Z2R6OHU2dHUifQ.DpCuw2Tz5f-43AVVHOoPKw';

const OrderTrackingPage = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) {
      // Initialize map
      const mapInstance = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', // Map style
        center: [0, 0], // Default center
        zoom: 12,
      });

      

      setMap(mapInstance);

      // Add navigation controls
      mapInstance.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Example marker for user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const userLocation = [position.coords.longitude, position.coords.latitude];

          new mapboxgl.Marker()
            .setLngLat(userLocation)
            .setPopup(new mapboxgl.Popup().setText('Your Location'))
            .addTo(mapInstance);

          mapInstance.setCenter(userLocation);
        });
      }
    }
  }, [map]);

  return (
    <div className="order-tracking-page">
      <h2>Track Your Order</h2>
      <div ref={mapContainer} className="map-container"></div>
      <p>Your order is currently being prepared. You can track its status on the map.</p>
    </div>
  );
};

export default OrderTrackingPage;
