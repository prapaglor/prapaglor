import React from 'react';

const PendudukPerkawinanCard = () => {
  const data = [
    {
      status: 'Kawin',
      lk: 2113,
      pr: 2014,
    },
    {
      status: 'Belum Kawin',
      lk: 1996,
      pr: 1595,
    },
    {
      status: 'Cerai Hidup',
      lk: 56,
      pr: 144,
    },
    {
      status: 'Cerai Mati',
      lk: 55,
      pr: 265,
    },
    {
      status: 'Jumlah Total',
      lk: 4220,
      pr: 4018,
    },
  ];

  return (
    <div className="w-full pt-20">
      <h2 className="text-2xl md:text-4xl font-normal mb-8 text-left text-white">
        Penduduk Berdasarkan Status Perkawinan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-[#295C55] to-[#143d47] text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-center mb-2">{item.status}</h3>
            <div className="flex justify-around text-center">
              <div>
                <p className="text-2xl font-bold">{item.lk.toLocaleString()}</p>
                <p className="text-sm mt-1">Laki-laki</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{item.pr.toLocaleString()}</p>
                <p className="text-sm mt-1">Perempuan</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendudukPerkawinanCard;