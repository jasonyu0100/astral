'use client';
import { HomePersonalHeaderCover } from './cover/main';
import { HomePersonalHeaderText } from './text/main';

export function HomePersonalHeaderInfo() {
  return (
    <div className='flex h-full flex-row items-center space-x-[2rem]'>
      <HomePersonalHeaderCover />
      <HomePersonalHeaderText />
    </div>
  );
}
