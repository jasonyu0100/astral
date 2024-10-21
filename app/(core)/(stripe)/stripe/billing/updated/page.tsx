'use client';
import { studioMap } from '@/(core)/(dashboard)/studio/map';

export default function Page() {
  return (
    <div className='flex flex-col space-y-[1rem]'>
      <h1 className='font-extraBold text-xl text-white'>
        Your payment settings are pending...{' '}
      </h1>
      <br />
      <button
        className='h-[100px] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
        onClick={() => {
          window.location.href = studioMap.studio.personal.link;
        }}
      >
        Back Home
      </button>
    </div>
  );
}
