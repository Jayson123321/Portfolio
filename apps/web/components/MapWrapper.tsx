'use client';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./Map'), { ssr: false });

export default function MapWrapper() {
  return <MapComponent />;
}
