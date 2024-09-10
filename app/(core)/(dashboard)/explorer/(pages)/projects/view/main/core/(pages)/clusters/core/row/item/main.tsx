'use client';
import { horizonMap } from '@/(core)/(project)/horizon/[id]/map';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { HorizonThumbnailElement } from '@/ui/cover/horizon/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function HorizonClusterRowItem() {
  return (
    <GlassWindowFrame
      name={GlassWindowFrame.name}
      className='aspect-[3/2] flex-shrink-0 p-[1rem]'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents
        onClick={() => {
          window.open(horizonMap.horizon.id.forum.link('0'), '_blank');
        }}
        className='flex h-full w-full cursor-pointer flex-col justify-between space-y-[1rem]'
      >
        <HorizonThumbnailElement fileElem={exampleFileElem} />
        <div className='flex flex-col'>
          <p className='text-lg font-bold text-slate-300'>Cluster Name</p>
        </div>
        <div className='flex flex-col'>
          <p className='text-sm font-light text-slate-300'>Category</p>
          <p className='text-sm font-light text-slate-300'>Degree</p>
          <p className='text-sm font-light text-slate-300'>Scale</p>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
