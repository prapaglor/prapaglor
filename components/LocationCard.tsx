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
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 py-20"
      data-aos="fade-up"
    >
      <div className='className="w-full max-w-7xl"'>
        <h1 className="py-5 text-white text-2xl md:text-5xl font-bold mb-4 text-left mx-auto">
          Lokasi Desa Prapag Lor
        </h1>

        <div
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
          data-aos="fade-up"
        >
          {/* Kiri: Teks dalam Card */}
          <div className="bg-gradient-to-r from-[#295C55] to-[#143d47] text-white rounded-xl px-4 py-12 shadow-md h-[300px] md:h-[400px] flex flex-col justify-center">
            <p className="text-lg md:text-2xl font-normal leading-relaxed text-center md:text-left max-w-xl">
              Desa Prapag Lor terletak di Kecamatan Losari, Kabupaten Brebes, Provinsi Jawa Tengah, Indonesia. Desa ini berada di ujung utara wilayah Brebes, berbatasan langsung dengan Laut Jawa di utara dan timur, serta Desa Prapag Kidul dan Karangdempel di selatan dan baratnya
            </p>
          </div>

          {/* Kanan: Map */}
          <div
            className="w-full h-[250px] md:h-[400px] overflow-hidden rounded-xl"
            data-aos="zoom-in"
          >
            <MapDesa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;