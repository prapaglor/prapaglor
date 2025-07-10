'use client';
import dynamic from 'next/dynamic';

const UmkmCardInternal = dynamic(() => import('./UmkmCardInternal'), {
  ssr: false,
});

export default function UmkmCard({
  setActiveSection,
}: {
  setActiveSection?: (section: 'beranda' | 'profil' | 'materi' | 'umkm' | 'ebook') => void;
}) {
  return <UmkmCardInternal setActiveSection={setActiveSection} />;
}