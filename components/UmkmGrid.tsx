'use client';
import React, { useState } from 'react';
import UmkmMap from './UmkmMap';

interface Umkm {
  id: number;
  title: string;
  image: string;
  nama: string;
  lokasi: [number, number];
  telp: string;
}

const umkmList: Umkm[] = [
  {
    id: 1,
    title: 'Warung Sate Sapi (Mas Cebbo)',
    image: '/sate.jpg',
    nama: 'Warung Sate Sapi (Mas Cebbo)',
    lokasi: [-6.8184602, 108.845425],
    telp: '087824912216',
  },
  {
    id: 2,
    title: 'Sari Tea',
    image: '/saritea.jpg',
    nama: 'Sari Tea',
    lokasi: [-6.8201234, 108.84321],
    telp: '',
  },
  {
    id: 3,
    title: 'Seblak Prasmanan',
    image: '/seblak.jpg',
    nama: 'Seblak Prasmanan',
    lokasi: [-6.819, 108.846],
    telp: '087715022290',
  },
  {
    id: 4,
    title: 'Puput Oleshop',
    image: '/puput.jpg',
    nama: 'Puput Oleshop',
    lokasi: [-6.817, 108.844],
    telp: '+886936266878',
  },
];

const UmkmGrid = () => {
  const [selectedUMKM, setSelectedUMKM] = useState<Umkm | null>(null);

  return (
    <div className="w-full px-4 sm:px-8 py-28 flex items-center justify-center">
      <div className="w-full max-w-7xl">
        <h1 className="py-5 text-white text-2xl md:text-5xl font-bold mb-10 text-left">
          Semua UMKM
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {umkmList.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300 text-white text-lg font-bold text-center bg-cover bg-center h-56 relative"
              style={{ backgroundImage: `url(${item.image})` }}
              onClick={() => setSelectedUMKM(item)}
            >
              <div className="absolute inset-0 bg-black/60 hover:bg-black/0 transition duration-300 flex items-center justify-center">
                <span className="z-10">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedUMKM && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
              backgroundImage: `url(${selectedUMKM.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />
            <div className="relative z-10 bg-white/90 text-black rounded-2xl shadow-lg w-[95%] max-w-5xl p-6 flex flex-col md:flex-row gap-6">
              <button
                onClick={() => setSelectedUMKM(null)}
                className="absolute top-3 right-4 text-gray-700 text-2xl font-bold z-10"
              >
                &times;
              </button>

              <div className="w-full md:w-2/3">
                <UmkmMap lokasi={selectedUMKM.lokasi} nama={selectedUMKM.nama} />
              </div>

              <div className="w-full md:w-1/3 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">{selectedUMKM.nama}</h2>
                <p className="text-sm mb-1">📍 {selectedUMKM.lokasi.join(', ')}</p>
                <p className="text-sm mb-4">📞 {selectedUMKM.telp}</p>
                <a
                  href={`https://wa.me/${selectedUMKM.telp.replace(/^0/, '62')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white font-semibold hover:bg-green-500 transition w-fit"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UmkmGrid;