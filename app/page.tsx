'use client';

import React, { useState, useEffect, useRef } from 'react';
import NavBar from "@/components/NavBar";
import DescriptionCard from "@/components/DescriptionCard";
import LocationCard from "@/components/LocationCard";
import EbookCard from "@/components/EbookCard";
import MateriK3Card from '@/components/MateriK3Card';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  const [activeSection, setActiveSection] = useState<'profil' | 'materi' | 'ebook'>('profil');
  const contentRef = useRef<HTMLDivElement>(null); // referensi bagian konten

  useEffect(() => {
    if (activeSection !== 'profil' && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div className={`${poppins.className} text-[#F0F3F0]`}>
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <DescriptionCard />

      {/* Ref ke bagian yang ingin langsung dilihat setelah DescriptionCard */}
      <div ref={contentRef}>
        {activeSection === 'profil' && <LocationCard />}
        {activeSection === 'materi' && <MateriK3Card />}
        {activeSection === 'ebook' && <EbookCard />}
      </div>
    </div>
  );
}