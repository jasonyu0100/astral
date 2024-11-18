'use client';
import { homeMap } from '@/(core)/(dashboard)/home/map';
import Link from 'next/link';
import { CommonSidebarTopSpaceCover } from './cover/main';
import { CommonSidebarTopSpaceInfo } from './info/main';

export function CommonSidebarTopSpace() {
  return (
    <Link className='h-[3rem] w-full' href={homeMap.home.projects.link}>
      <div className='flex h-full w-full flex-row items-center space-x-[1rem]'>
        <CommonSidebarTopSpaceCover />
        <CommonSidebarTopSpaceInfo />
      </div>
    </Link>
  );
}
