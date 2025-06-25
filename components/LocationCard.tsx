'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MapDesa = dynamic(() => import('./MapDesa'), { ssr: false });

const LocationCard = () => {
  return (
    <div className="px-12 py-12">
      <div className="rounded-2xl shadow-lg border border-gray-200 overflow-hidden max-w-2xl mx-auto p-4 bg-white">
        <h1 data-aos="fade-in" className="text-lg md:text-xl font-semibold mb-4 text-center">
          Lokasi Desa Prapag Lor
        </h1>
        <div data-aos="fade-in" className="w-auto h-auto">
          <MapDesa />
        </div>
      </div>
    </div>
  );
};

export default LocationCard;