'use client';
import React from 'react';
import JumlahPenduduk from './JumlahPenduduk';
import GrafikPenduduk from './GrafikPenduduk';
import PendudukPerkawinanCard from './PendudukPerkawinan';
import PendudukAgama from './PendudukAgama';
import PendudukPendidikan from './PendudukPendidikan';

const PendudukCard = () => {

  return (
    <div 
      className="w-full px-4 sm:px-8 py-44 flex items-center justify-center" 
      data-aos="fade-up">
        <div className="w-full max-w-7xl">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-left mb-8">
            Demografi Penduduk
            </h1>
            <JumlahPenduduk />
            <GrafikPenduduk />
            <PendudukPerkawinanCard />
            <PendudukAgama />
            <PendudukPendidikan />
        </div>
    </div>
  );
};

export default PendudukCard;