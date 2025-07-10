'use client';
import React from 'react';

const PendudukAgama = () => {
  const data = [
    { agama: 'Islam', lk: 4218, pr: 4017 },
    { agama: 'Katholik', lk: 1, pr: 0 },
    { agama: 'Konghucu', lk: 1, pr: 1 },
    { agama: 'Jumlah', lk: 4220, pr: 4018 },
  ];

  return (
    <div className="w-full pt-20">
      <h2 className="text-2xl md:text-4xl font-normal mb-8 text-left text-white">
        Penduduk Berdasarkan Status Perkawinan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-[#295C55] to-[#143d47] text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-center mb-2">{item.agama}</h3>
            <div className="flex justify-around text-center">
              <div>
                <p className="text-xl font-bold">{item.lk.toLocaleString()}</p>
                <p className="text-sm">Laki-laki</p>
              </div>
              <div>
                <p className="text-xl font-bold">{item.pr.toLocaleString()}</p>
                <p className="text-sm">Perempuan</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendudukAgama;