'use client';
import dynamic from 'next/dynamic';

const UmkmMap = dynamic(() => import('./UmkmMapInternal'), {
  ssr: false,
  loading: () => <div className="h-[300px] bg-gray-200 rounded-xl" />,
});

export default UmkmMap;