'use client';
import { HorizonCover } from '@/(components)/(element)/horizon/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { horizonMap } from '@/(cx)/(venture)/horizon/[id]/map';
import { glassFx, roundedFx } from '@/(design)/(fx)/data';
import { exampleFile } from '@/(logic)/internal/model/resource/file/main';
import Link from 'next/link';

export function Horizon() {
  return (
    <GlassWindowFrame
      name={GlassWindowFrame.name}
      className='p-[1rem]'
      roundedFx={roundedFx['rounded-sm']}
    >
      <GlassWindowContents className='flex flex-row items-center space-x-[1rem]'>
        <Link
          className='flex flex-col items-center space-y-[1rem]'
          href={horizonMap.horizon.id.base.link('0')}
        >
          <HorizonCover file={exampleFile} />
        </Link>
        <div className='flex flex-col'>
          <p className='text-xl font-bold text-slate-300'>Horizon</p>
          <p className='text-lg text-slate-300'>John Smith</p>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
