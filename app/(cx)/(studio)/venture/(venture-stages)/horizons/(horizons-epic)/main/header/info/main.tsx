'use client';
import { VentureCover } from './cover/main';
import { VentureHeaderText } from './text/main';

export function VentureInfo() {
  return (
    <div className='flex h-full flex-row items-center space-x-[2rem]'>
      <VentureHeaderText />
    </div>
  );
}
