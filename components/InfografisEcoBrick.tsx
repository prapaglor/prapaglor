'use client';
import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const infografisImages = [
  '/hukum1.jpg',
  '/hukum2.jpg',
  '/hukum3.jpg',
  '/hukum4.jpg',
  '/ecoBrick.jpg',
];

const InfografisEcoBrick = () => {
  const [showModal, setShowModal] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('hasSeenInfografis');
    if (!hasSeen) {
      setShowModal(true);
      sessionStorage.setItem('hasSeenInfografis', 'true');
    }
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-[#295C55] to-[#143d47] text-white rounded-xl max-w-2xl w-[92%] p-6 relative shadow-lg">
        {/* Tombol Tutup */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-4 text-white hover:text-gray-200 text-3xl font-bold"
          aria-label="Tutup"
        >
          &times;
        </button>

        {/* Judul */}
        <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center">
          Selamat Datang di Website Kami!
        </h2>

        {/* Slider Container */}
        <div className="relative">
          {/* Tombol Kiri */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition"
            aria-label="Slide Sebelumnya"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Tombol Kanan */}
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition"
            aria-label="Slide Selanjutnya"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div ref={sliderRef} className="keen-slider rounded-md overflow-hidden">
            {infografisImages.map((src, i) => (
              <div key={i} className="keen-slider__slide flex justify-center p-3">
                <div className="bg-white p-3 rounded-lg border border-white shadow-md">
                  <img
                    src={src}
                    alt={`Infografis ${i + 1}`}
                    className="w-full max-w-lg mx-auto h-auto max-h-[65vh] object-contain rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfografisEcoBrick;