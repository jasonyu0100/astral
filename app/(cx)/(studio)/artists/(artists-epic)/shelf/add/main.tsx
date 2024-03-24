'use client';

import Link from "next/link";

export function ArtistsCollectionAdd() {
  return (
    <div className='flex h-[250px] w-[200px] flex-col items-center justify-center'>
      <Link
        className='flex flex-col items-center space-y-[1rem]'
        href='/collection/now'
      >
        <div className='flex h-[150px] w-[150px] items-center justify-center bg-white'>
          <div className='h-[125px] w-[125px] bg-black'>
            <img className='w-full' src='/voyager/personal.png' />
          </div>
        </div>
        <p className='font-creato-bold text-xl font-bold text-slate-50'>
          Personal
        </p>
      </Link>
    </div>
  );
}
