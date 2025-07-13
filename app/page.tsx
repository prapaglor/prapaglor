'use client';

import React, { useState, useRef } from 'react';
import NavBar from '@/components/NavBar';
import BerandaCard from '@/components/BerandaCard';
import ProfileCard from '@/components/ProfileCard';
import MateriK3Card from '@/components/MateriK3Card';
import EbookCard from '@/components/EbookCard';
import { Poppins } from 'next/font/google';
import DescriptionCard from '@/components/DescriptionCard';
import UmkmGrid from '@/components/UmkmGrid';
import InfografisEcoBrick from '@/components/InfografisEcoBrick';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  const [activeSection, setActiveSection] = useState<
    'beranda' | 'profil' | 'materi' | 'umkm' | 'ebook'
  >('beranda');

  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`${poppins.className} text-[#F0F3F0]`}>
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <DescriptionCard />
      <InfografisEcoBrick />

      <div ref={contentRef}>
        {activeSection === 'beranda' && <BerandaCard/>}
        {activeSection === 'profil' && <ProfileCard />}
        {activeSection === 'materi' && <MateriK3Card />}
        {activeSection === 'umkm' && <UmkmGrid />}
        {activeSection === 'ebook' && <EbookCard />}
      </div>
    </div>
  );
}