'use client';
import React, { useEffect, useState } from 'react';

const NavBar = ({ activeSection, setActiveSection }: {
  activeSection: 'profil' | 'materi' | 'ebook';
  setActiveSection: (section: 'profil' | 'materi' | 'ebook') => void;
}) => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolledPastHero(scrollY > window.innerHeight - 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (section: 'profil' | 'materi' | 'ebook') => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const NavMenu = () => (
    <>
      {['profil', 'materi', 'ebook'].map((key) => (
        <button
          key={key}
          onClick={() => handleClick(key as 'profil' | 'materi' | 'ebook')}
          className={`text-sm md:text-xl font-medium px-3 py-1 rounded-2xl transition duration-300
            ${activeSection === key ? 'bg-white text-[#295C55]' : 'text-white hover:bg-white hover:text-[#295C55]'}`}
        >
          {key === 'profil' ? 'Profil Desa' : key === 'materi' ? 'Materi K3' : 'EBook'}
        </button>
      ))}
    </>
  );

  return (
    <>
      {!isScrolledPastHero && (
        <div className="fixed top-0 left-0 w-full bg-transparent shadow-none z-50 px-4 md:px-6 py-3 md:py-4 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center space-x-3 justify-center sm:justify-start">
              <div className="w-9 h-9 md:w-15 md:h-15 relative">
                <img
                  src="/logodesa.png"
                  alt="Logo Desa Prapaglor"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="leading-tight text-center sm:text-left">
                <h1 className="text-xl md:text-lg font-bold text-white">
                  Desa Prapaglor
                </h1>
                <p className="text-lg text-white hidden sm:block">
                  Kecamatan Losari, Brebes
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-end gap-3">
              <NavMenu />
            </div>
          </div>
        </div>
      )}

      {isScrolledPastHero && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90vw] sm:w-auto">
          <div className="bg-[#295C55] backdrop-blur-lg rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-gray-200 flex flex-wrap justify-center gap-3">
            <NavMenu />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
