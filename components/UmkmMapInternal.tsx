'use client';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

interface UmkmMapProps {
  lokasi: [number, number];
  nama: string;
}

const UmkmMap: React.FC<UmkmMapProps> = ({ lokasi, nama }) => {
  useEffect(() => {
    // Cek window hanya untuk jaga-jaga
    if (typeof window === 'undefined') return;

    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x.src,
      iconUrl: markerIcon.src,
      shadowUrl: markerShadow.src,
    });

    const existingMap = L.DomUtil.get('umkm-map');
    if (existingMap && existingMap.innerHTML !== '') {
      existingMap.innerHTML = '';
    }

    const map = L.map('umkm-map', {
      zoomControl: true,
    }).setView(lokasi, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(map);

    L.marker(lokasi).addTo(map).bindPopup(nama).openPopup();

    return () => {
      map.remove();
    };
  }, [lokasi, nama]);

  return <div id="umkm-map" className="w-full h-[300px] rounded-xl" />;
};

export default UmkmMap;