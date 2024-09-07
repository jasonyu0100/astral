'use client';
import { horizonMap } from '@/(core)/(project)/horizon/[id]/map';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { HorizonThumbnailElement } from '@/ui/cover/horizon/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import Link from 'next/link';

export function VentureHorizonsListElement() {
  return (
    <GlassWindowFrame
      name={GlassWindowFrame.name}
      className='aspect-[3/2] flex-shrink-0 p-[1rem]'
      roundedFx={roundedFx['rounded']}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem]'>
        <div className='flex flex-row items-center space-x-[1rem]'>
          <Link
            className='flex flex-col items-center space-y-[1rem]'
            href={horizonMap.horizon.id.forum.link('0')}
          >
            <HorizonThumbnailElement fileElem={exampleFileElem} />
          </Link>
          <div className='flex flex-col'>
            <p className='text-xl font-bold text-slate-300'>Horizon</p>
            <p className='text-lg text-slate-300'>John Smith</p>
          </div>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
