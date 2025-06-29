'use client';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapDesa = () => {
  useEffect(() => {
    // Hindari re-inisialisasi map jika sudah ada
    if (L.DomUtil.get('map')) {
      L.DomUtil.get('map')!.innerHTML = '';
    }

    const map = L.map('map', {
      zoomControl: true,
    }).setView([-6.8184602, 108.8454250], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(map);

    return () => {
      map.remove(); // clean up saat unmount
    };
  }, []);

  return (
    <div
      id="map"
      className="w-full h-full rounded-xl"
    />
  );
};

export default MapDesa;