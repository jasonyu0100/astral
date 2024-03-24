'use client';
import { releaseMap } from '@/(cx)/(releases)/release/[id]/map';
import Link from 'next/link';

export function Cluster() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Link
        className='flex flex-col items-center space-y-[1rem]'
        href={releaseMap.release.id.one.link('0')}
      >
        <div className='mt-[1rem] flex h-[150px] w-[150px] items-center justify-center  bg-white'>
          <div className='h-[125px] w-[125px] bg-black'>
            <img className='h-full w-full' src='/voyager/personal.png' />
          </div>
        </div>
        <p className='font-creato-bold text-xl font-bold text-slate-50'>
          Cluster
        </p>
      </Link>
    </div>
  );
}
