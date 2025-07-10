import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const GrafikPenduduk = () => {
  const data = {
    labels: [
      '0-4', '5-9', '10-14', '15-19', '20-24', '25-29',
      '30-34', '35-39', '40-44', '45-49', '50-54', '55-59',
      '60-64', '65-69', '70-74', '75+'
    ],
    datasets: [
      {
        label: 'Laki-Laki',
        data: [297, 348, 325, 316, 339, 378, 428, 446, 336, 214, 204, 180, 187, 100, 54, 68],
        backgroundColor: '#4e79a7',
      },
      {
        label: 'Perempuan',
        data: [257, 315, 274, 331, 330, 357, 403, 388, 322, 212, 205, 179, 150, 93, 61, 141],
        backgroundColor: '#f28e2b',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Penting agar grafik bisa fleksibel
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Jumlah Penduduk',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Kelompok Umur (tahun)',
        },
      },
    },
  };

  return (
    <div className="w-full pt-20">
      <h2 className="text-2xl md:text-3xl font-normal mb-8 text-left text-white">
        Grafik Jumlah Penduduk Berdasarkan Umur dan Jenis Kelamin
      </h2>

      <div className="bg-white rounded-xl shadow-md p-4">
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default GrafikPenduduk;