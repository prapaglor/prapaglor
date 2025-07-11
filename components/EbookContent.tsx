'use client';
import React, { useState } from 'react';

type Ebook = {
  id: number;
  title: string;
  file: string;
  cover: string;
};

const EbookContent = () => {
  const [selectedEbook, setSelectedEbook] = useState<Ebook | null>(null);
  const ebooks: Ebook[] = [
    {
      id: 1,
      title: 'Rumah Aman Keluarga Migran',
      file: '/Ebook1.pdf',
      cover: '/Ebook1-cover.png',
    },
  ];

  return (
    <div className="w-full px-4 sm:px-8 py-28 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          Daftar eBook K3
        </h1>

        {/* Grid Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ebooks.map((ebook) => (
            <div
              key={ebook.id}
              className="cursor-pointer border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              onClick={() => setSelectedEbook(ebook)}
            >
              <img src={ebook.cover} alt={ebook.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{ebook.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* PDF Viewer */}
        {selectedEbook && (
          <div className="mt-16 w-full h-[80vh]">
            <h2 className="text-xl font-bold mb-4 text-center">{selectedEbook.title}</h2>
            <iframe
              src={selectedEbook.file}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title={selectedEbook.title}
            />
            <div className="text-center mt-4">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={() => setSelectedEbook(null)}
              >
                Tutup Viewer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EbookContent;