import React from 'react';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { SpaceCover } from '@/(components)/(element)/space/main';
import { exampleFileElem } from '@/(model)/elements/file/main';

export function NetworkSidebarPointContents() {
  return (
    <>
      <HorizontalDivider />

      <div className='flex flex-row items-center space-x-[2rem]'>
        <SpaceCover file={exampleFileElem} />
        <p className='text-lg font-bold text-slate-300'>Creative A</p>
      </div>
      <div className='flex flex-row items-center space-x-[2rem]'>
        <SpaceCover file={exampleFileElem} />
        <p className='text-lg font-bold text-slate-300'>Creative A</p>
      </div>
      <div className='flex flex-row items-center space-x-[2rem]'>
        <SpaceCover file={exampleFileElem} />
        <p className='text-lg font-bold text-slate-300'>Creative A</p>
      </div>
    </>
  );
}
