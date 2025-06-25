'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Poppins } from 'next/font/google';
import { TypeAnimation } from 'react-type-animation';

// Font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const DescriptionCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={`${poppins.className} w-full min-h-[500px] bg-white grid grid-cols-1 md:grid-cols-2 gap-x-6 px-8 md:px-12 py-12`}>
      
      {/* Kiri - Teks */}
      <div data-aos="fade-in" className="flex flex-col justify-center items-center text-center space-y-4 h-full">
        <h1 className="text-3xl md:text-3xl pb-12 lg:text-4xl xl:text-5xl font-bold text-gray-800">
          Selamat Datang <br />
          <TypeAnimation
            sequence={[
              'di Website',
              1000,
              'Desa Prapag Lor',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="whitespace-pre-line font-light"
          />
          {/* Selamat Datang <br />
          Di Website <br />
          Desa Prapag Lor */}
        </h1>
      </div>

      {/* Kanan - Gambar Grid */}
        <div
        className="grid grid-cols-1 lg:grid-cols-5 grid-rows-2 gap-4 w-full max-w-4xl mx-auto"
        data-aos="fade-left"
        >
            {/* Gambar 1 - Baris 1, Kolom 1-2 */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 lg:col-span-3 lg:col-start-1 lg:row-start-1 aspect-video">
                <div className="flex flex-col items-center justify-center h-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-video">
                    <img
                        src="/prapaglor.jpg"
                        alt="Gambar 1"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Gambar 2 - Baris 2, Kolom 3-4 */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 lg:col-span-3 lg:col-start-3 lg:row-start-2 aspect-video">
                <div className="flex items-center justify-center h-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-video">
                    <img
                        src="/mapLosari.png"
                        alt="Gambar 2"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

export default DescriptionCard;