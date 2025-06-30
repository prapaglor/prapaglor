'use client';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const MapDesa = () => {
  useEffect(() => {
    // Hindari penggunaan `any` dengan pendekatan yang aman
    delete (L.Icon.Default.prototype as unknown as { _getIconUrl: unknown })._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x.src,
      iconUrl: markerIcon.src,
      shadowUrl: markerShadow.src,
    });

    // Bersihkan map jika sudah ada
    const existingMap = L.DomUtil.get('map');
    if (existingMap) {
      existingMap.innerHTML = '';
    }

    const map = L.map('map', {
      zoomControl: true,
    }).setView([-6.8184602, 108.8454250], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(map);

    L.marker([-6.8184602, 108.8454250])
      .addTo(map)
      .bindPopup('Desa Prapag Lor')
      .openPopup();

    return () => {
      map.remove();
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