'use client';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapDesa = () => {
  useEffect(() => {
    const map = L.map('map', {
        zoomControl: true,
    }).setView([-6.8184602, 108.8454250], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(map);
    
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      className="w-full h-40 md:h-56 lg:h-[350px] rounded-xl"
    />
  );
};

export default MapDesa;