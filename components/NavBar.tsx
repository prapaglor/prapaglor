'use client';
import React from 'react';

const NavBar = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white border-b-1">
      {/* Kiri: Logo + Teks */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 relative">
          <img
            src="/logodesa.png"
            alt="Logo Desa Prapaglor"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h1 className="text-md md:text-lg font-bold text-gray-800 leading-tight">
            Desa Prapaglor
          </h1>
          <p className="text-xs text-gray-500">Kecamatan Losari, Brebes, Jawa Tengah</p>
        </div>
      </div>
      
    </div>
  );
};

export default NavBar;