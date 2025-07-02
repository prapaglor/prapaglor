'use client';
import React from 'react';
import JumlahPenduduk from './JumlahPenduduk';
import GrafikPenduduk from './GrafikPenduduk';

const PendudukCard = () => {

  return (
    <div 
    className="w-full px-4 sm:px-8 py-20 flex justify-center" 
    data-aos="fade-up">
        <div className="w-full max-w-6xl">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-left mb-8">
            Demografi Penduduk
            </h1>
            <JumlahPenduduk />
            <GrafikPenduduk />
        </div>
    </div>
  );
};

export default PendudukCard;