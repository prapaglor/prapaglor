'use client';
import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolledPastHero(scrollY > window.innerHeight - 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-[#295C55] shadow-md z-50 px-4 md:px-6 py-3 md:py-4 transition-all duration-300">
      <div className="flex items-center justify-between flex-wrap gap-2">
        {/* Kiri: Logo + Deskripsi */}
        {!isScrolledPastHero && (
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 md:w-10 md:h-10 relative">
              <img
                src="/logodesa.png"
                alt="Logo Desa Prapaglor"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="leading-tight">
              <h1 className="text-sm md:text-base font-bold text-white">
                Desa Prapaglor
              </h1>
              <p className="text-xs text-white hidden sm:block">
                Kecamatan Losari, Brebes
              </p>
            </div>
          </div>
        )}

        {/* Kanan: Menu */}
        <div className="flex flex-wrap gap-4 ml-auto">
          <a
            href="#profil"
            className="text-white text-sm md:text-base font-medium transition duration-300 hover:text-yellow-300 hover:scale-105"
          >
            Profil Desa
          </a>
          <a
            href="#materi"
            className="text-white text-sm md:text-base font-medium transition duration-300 hover:text-yellow-300 hover:scale-105"
          >
            Materi K3
          </a>
          <a
            href="#ebook"
            className="text-white text-sm md:text-base font-medium transition duration-300 hover:text-yellow-300 hover:scale-105"
          >
            EBook
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;