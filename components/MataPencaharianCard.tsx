'use client';
import React from 'react';
import PMIFact from './PMIFact';

const MataPencaharianCard = () => {
  const data = [
    {
      title: 'Buruh Tambak',
      img: '/petambak.jpg',
      desc: 'Sebagian penduduk Desa Prapag Lor bekerja sebagai buruh tambak, terutama di wilayah pesisir. Kegiatan ini menjadi salah satu mata pencaharian yang penting dengan hasil utama berupa udang dan bandeng.',
    },
    {
      title: 'Nelayan',
      img: '/nelayan.webp',
      desc: 'Warga yang tinggal dekat pantai juga banyak yang berprofesi sebagai nelayan. Dengan memanfaatkan laut di sekitar, nelayan menangkap ikan dan hasil laut lainnya sebagai sumber penghasilan sehari-hari.',
    },
  ];

  return (
    <div className="w-full px-4 sm:px-8 py-10 flex items-center justify-center" data-aos="fade-up">
      <div className="w-full max-w-7xl">
        <h1 className="py-5 text-white text-2xl md:text-5xl font-bold mb-10 text-left">
          Mata Pencaharian di Desa Prapag Lor
        </h1>

        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-8 mb-16`}
          >
            {/* Gambar */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto max-h-[400px] object-cover rounded-2xl"
              />
            </div>

            {/* Teks */}
            <div className="w-full md:w-1/2 bg-gradient-to-r from-[#295C55] to-[#143d47] text-white rounded-xl px-6 py-8 shadow-md flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h2>
              <p className="text-base md:text-lg leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
        <PMIFact />
      </div>
    </div>
  );
};

export default MataPencaharianCard;