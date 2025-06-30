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
      className="w-full h-screen px-4 sm:px-8 py-16 flex items-center justify-center"
    >
      <div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        data-aos="fade-up"
      >
        {/* Kiri: Teks dalam Card */}
        <div className="bg-[#295C55] text-white rounded-xl p-6 shadow-md h-[250px] md:h-[350px] flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
            Lokasi Desa Prapag Lor
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repudiandae iste sequi voluptate praesentium molestiae, consequuntur aliquam itaque harum beatae voluptates porro eveniet, quidem officiis, dignissimos illum quis inventore reprehenderit?
          </p>
        </div>

        {/* Kanan: Map */}
        <div
          className="w-full h-[250px] md:h-[350px] overflow-hidden rounded-xl"
          data-aos="zoom-in"
        >
          <MapDesa />
        </div>
      </div>
    </div>
  );
};

export default LocationCard;