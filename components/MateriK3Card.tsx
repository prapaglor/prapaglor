'use client';

import React, { useEffect } from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MateriK3Card = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 py-20"
      data-aos="fade-up"
    >
      <div className="w-full max-w-7xl">
        <h2 className="text-xl md:text-5xl font-bold text-white md:pt-10 text-left">
          Edukasi Keselamatan & Kesehatan Kerja (K3)
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
  );
};

export default MateriK3Card;

const DummyContent = ({ judul }: { judul: string }) => {
  return (
    <div className="bg-gradient-to-r from-[#295C55] to-[#143d47] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-white">
          {judul}
        </span>{' '}
        merupakan salah satu aspek penting dalam menciptakan lingkungan kerja yang aman dan sehat. Edukasi ini bertujuan agar para pekerja memahami risiko kerja, cara penggunaan alat pelindung diri, serta langkah penanganan kecelakaan kerja.
      </p>
      <img
        src="/K3_logo.png"
        alt="Edukasi K3"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8"
      />
    </div>
  );
};

const data = [
  {
    category: 'Implementasi K3 bagi Pekerja Migran',
    title: 'Pengertian K3',
    src: '/content_1.png',
    content: <DummyContent judul="Pentingnya K3 di Tempat Kerja" />,
  },
  {
    category: 'Dasar Hukum dan Asas Ketenagakerjaan bagi Pekerja Migran',
    title: 'Tinjauan Umum',
    src: '/content_2.png',
    content: <DummyContent judul="Mengenal Alat Pelindung Diri (APD)" />,
  },
  {
    category: 'Literasi Perjanjian Kerja bagi Pekerja Migran',
    title: 'Literasi',
    src: '/content_3.webp',
    content: <DummyContent judul="Tanggap Darurat di Lingkungan Kerja" />,
  },
  {
    category: 'Peran pemerintah dalam melindungi hak Pekerja Migran',
    title: 'Peran Pemerintah',
    src: '/content_4.jpeg',
    content: <DummyContent judul="Menjaga Kebersihan Area Kerja" />,
  },
];