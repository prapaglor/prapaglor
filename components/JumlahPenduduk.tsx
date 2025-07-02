import React from 'react';

const PendudukStats = () => {
  const data = [
    { jumlah: '8.238', label: 'Penduduk' },
    { jumlah: '4.220', label: 'Laki-Laki' },
    { jumlah: '4.018', label: 'Perempuan' },
    { jumlah: '2.243', label: 'KK Laki-Laki' },
    { jumlah: '528', label: 'KK Perempuan' },
  ];

  return (
    <div className="w-full">
      {/* Jangan pakai max-w-6xl di sini agar ikut dari parent */}
      <h2 className="text-2xl md:text-4xl font-normal mb-8 text-left text-white">
        Jumlah Penduduk
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-[#295C55] to-[#143d47] text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-4xl font-bold text-center">{item.jumlah}</p>
            <p className="text-lg font-medium text-center mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendudukStats;