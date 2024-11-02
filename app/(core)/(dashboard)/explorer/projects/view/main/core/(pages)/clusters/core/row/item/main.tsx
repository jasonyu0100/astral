'use client';
import { horizonsMap } from '@/(core)/(project)/horizons/[id]/map';
import { exampleFileElement } from '@/architecture/model/elements/file/main';
import { HorizonsThumbnailElement } from '@/components/cover/horizon/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';

export function HorizonsClusterRowItem() {
  return (
    <GlassWindowFrame
      name={GlassWindowFrame.name}
      className='aspect-[3/2] flex-shrink-0 p-[1rem]'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents
        onClick={() => {
          window.open(horizonsMap.horizons.id.horizon.link('0'), '_blank');
        }}
        className='flex h-full w-full cursor-pointer flex-col justify-between space-y-[1rem]'
      >
        <HorizonsThumbnailElement fileElem={exampleFileElement} />
        <div className='flex flex-col'>
          <p className='text-lg font-bold text-slate-300'>Cluster Name</p>
        </div>
        <div className='flex flex-col'>
          <p className='text-sm font-light text-slate-300'>Category</p>
          <p className='text-sm font-light text-slate-300'>Degree</p>
          <p className='text-sm font-light text-slate-300'>Scale</p>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
