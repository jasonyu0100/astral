'use client';
import { HorizonCover } from '@/(components)/(element)/horizon/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { horizonMap } from '@/(core)/(project)/horizon/[id]/map';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { glassFx, roundedFx } from '@/(style)/data';
import Link from 'next/link';

export function VentureHorizonsListElement() {
  return (
    <GlassWindowFrame
      name={GlassWindowFrame.name}
      className='aspect-[16/9] flex-shrink-0 p-[1rem]'
      roundedFx={roundedFx['rounded-sm']}
    >
      <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem]'>
        <div className='flex flex-row items-center space-x-[1rem]'>
          <Link
            className='flex flex-col items-center space-y-[1rem]'
            href={horizonMap.horizon.id.area.link('0')}
          >
            <HorizonCover fileElem={exampleFileElem} />
          </Link>
          <div className='flex flex-col'>
            <p className='text-xl font-bold text-slate-700'>Horizon</p>
            <p className='text-lg text-slate-700'>John Smith</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <p className='text-md font-bold text-slate-700'>Description</p>
            <p className='text-lg text-slate-700'>John Smith</p>
          </div>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
