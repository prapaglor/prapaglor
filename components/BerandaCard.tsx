'use client';
import React from 'react';
import LocationCard from './LocationCard';
import MataPencaharianCard from './MataPencaharianCard';
import UmkmCard from './UmkmCardInternal';
import { TypeAnimation } from 'react-type-animation';

const BerandaCard = () => {
  return (
    <>
        <div className="w-full px-6 pt-44 flex items-center justify-center">
            <p className="text-2xl font-bold max-w-3xl text-center leading-relaxed">
              <TypeAnimation
              sequence={['Melalui website ini, Anda dapat menjelajahi berbagai informasi seputar desa, seperti profil desa, data penduduk, demografi, potensi wilayah, serta UMKM yang berkembang di Desa Prapaglor', 1000,
                 'このウェブサイトを通じて、村のプロフィール、人口データ、人口統計、地域の潜在力、プラパグラー村で発展している中小企業など、村に関するさまざまな情報を調べることができます。', 1000,]}
              wrapper="span"
              speed={50}
              repeat={1}
            />
            </p>
        </div>
        <LocationCard />
        <MataPencaharianCard />
        <UmkmCard />
    </>
  );
};

export default BerandaCard;