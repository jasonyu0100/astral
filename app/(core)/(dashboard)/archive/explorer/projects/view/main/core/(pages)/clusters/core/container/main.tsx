'use client';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { HorizonsClusterLabel } from '../label/main';
import { HorizonsClusterRow } from '../row/main';

export function HorizonsClusterContainer() {
  return (
    <div className='flex flex-col p-[2rem]'>
      <HorizonsClusterLabel>Category Name (10)</HorizonsClusterLabel>
      <GlassWindowFrame
        name={HorizonsClusterContainer.name}
        className='h-[300px] w-[full] flex-shrink-0'
      >
        <GlassWindowContents className={`flex h-full w-full flex-col`}>
          <HorizonsClusterRow />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
