'use client';
import React from 'react';
import LocationCard from './LocationCard';
import MataPencaharianCard from './MataPencaharianCard';
import UmkmCard from './UmkmCardInternal';

const BerandaCard = () => {
  return (
    <>
        <div className="w-full px-6 pt-44 flex items-center justify-center">
            <p className="text-2xl font-bold max-w-3xl text-center leading-relaxed">
                Melalui website ini, Anda dapat menjelajahi berbagai informasi seputar desa, seperti profil desa, data penduduk, demografi, potensi wilayah, serta UMKM yang berkembang di Desa Prapaglor.
            </p>
        </div>
        <LocationCard />
        <MataPencaharianCard />
        <UmkmCard />
    </>
  );
};

export default BerandaCard;