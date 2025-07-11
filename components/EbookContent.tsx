'use client';
import React, { useState, useEffect } from 'react';

type Ebook = {
  id: number;
  title: string;
  file: string;
  cover: string;
};

const EbookContent = () => {
  const [selectedEbook, setSelectedEbook] = useState<Ebook | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {ebooks.map((ebook) => (
            <div
              key={ebook.id}
              className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              onClick={() => setSelectedEbook(ebook)}
            >
              <div className="relative aspect-[3/4] w-full bg-gray-100">
                <img
                  src={ebook.cover}
                  alt={ebook.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal PDF Viewer */}
      {selectedEbook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl h-[90vh] relative overflow-hidden">
            <div className="flex justify-end px-4 py-2 border-b">
              <button
                className="text-red-600 font-bold text-2xl"
                onClick={() => setSelectedEbook(null)}
              >
                ×
              </button>
            </div>
            <iframe
              src={selectedEbook.file}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title={selectedEbook.title}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EbookContent;