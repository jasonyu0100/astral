import React from 'react';
import { Divider } from '@/(components)/(line)/divider/main';
import { SpaceCover } from '@/(components)/(element)/space/main';
import { exampleFile } from '@/(model)/media/resource/file/main';

export function NetworkSidebarPointContents() {
  return (
    <>
      <Divider />

      <div className='flex flex-row items-center space-x-[2rem]'>
        <SpaceCover file={exampleFile} />
        <p className='text-lg font-bold text-slate-300'>Creative A</p>
      </div>
      <div className='flex flex-row items-center space-x-[2rem]'>
        <SpaceCover file={exampleFile} />
        <p className='text-lg font-bold text-slate-300'>Creative A</p>
      </div>
      <div className='flex flex-row items-center space-x-[2rem]'>
        <SpaceCover file={exampleFile} />
        <p className='text-lg font-bold text-slate-300'>Creative A</p>
      </div>
    </>
  );
}
