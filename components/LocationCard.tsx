'use client';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MapDesa = dynamic(() => import('./MapDesa'), { ssr: false });

const LocationCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="lokasi"
      className="w-full h-screen px-4 py-16 flex items-center justify-center"
    >
      <div
        className="bg-[#295C55] rounded-2xl shadow-lg border border-gray-200 overflow-hidden max-w-5xl w-full p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        data-aos="fade-up"
      >
        {/* Kiri: Teks */}
        <div className="text-white text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-semibold mb-4">
            Lokasi Desa Prapag Lor
          </h1>
          <p className="text-sm md:text-base leading-relaxed">
            Desa Prapag Lor terletak di Kecamatan Losari, Kabupaten Brebes, Jawa Tengah.
            Lokasi strategis ini memudahkan akses dari berbagai arah dan menjadi pusat
            aktivitas masyarakat setempat.
          </p>
        </div>

        {/* Kanan: Map */}
        <div
          className="w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-xl overflow-hidden"
          data-aos="zoom-in"
        >
          <MapDesa />
        </div>
      </div>
    </div>
  );
};

export default LocationCard;