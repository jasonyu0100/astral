'use client';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { HorizonsGroupLabel } from '../label/main';
import { HorizonsGroupRow } from '../row/main';

export function HorizonsGroupContainer() {
  return (
    <div className='flex flex-col p-[2rem]'>
      <HorizonsGroupLabel>Category Name (10)</HorizonsGroupLabel>
      <GlassWindowFrame
        name={HorizonsGroupContainer.name}
        className='h-[300px] w-[full] flex-shrink-0'
      >
        <GlassWindowContents className={`flex h-full w-full flex-col`}>
          <HorizonsGroupRow />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
