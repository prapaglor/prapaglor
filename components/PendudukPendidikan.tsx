'use client';
import React from 'react';

const PendudukPendidikan = () => {
  const data = [
    { jenjang: 'Tdk/Blm Sekolah', lk: 798, pr: 781 },
    { jenjang: 'Blm Tamat SD', lk: 881, pr: 917 },
    { jenjang: 'Tamat SD', lk: 1575, pr: 1460 },
    { jenjang: 'Tamat SLTP', lk: 541, pr: 547 },
    { jenjang: 'Tamat SLTA', lk: 365, pr: 264 },
  ];

  return (
    <div className="w-full pt-20">
      <h2 className="text-2xl md:text-3xl font-normal mb-8 text-left text-white">
        Jumlah Penduduk Berdasarkan Pendidikan
      </h2>

      <div className="overflow-x-auto">
        <div className="mx-auto max-w-4xl">
          <table className="w-full text-lg bg-white text-gray-800 rounded-xl overflow-hidden shadow-md">
            <thead className="bg-[#295C55] text-white text-base">
              <tr>
                <th className="px-10 py-6 text-left">Jenjang Pendidikan</th>
                <th className="px-10 py-6 text-center">Total</th>
              </tr>
            </thead>
            <tbody className="text-base">
              {data.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="px-10 py-6">{item.jenjang}</td>
                  <td className="px-10 py-6 text-center">
                    {(item.lk + item.pr).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendudukPendidikan;