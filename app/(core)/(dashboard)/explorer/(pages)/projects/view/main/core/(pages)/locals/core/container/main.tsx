'use client';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { HorizonsLocalLabel } from '../label/main';
import { HorizonsLocalRow } from '../row/main';

export function HorizonsLocalContainer() {
  return (
    <div className='flex flex-col p-[2rem]'>
      <HorizonsLocalLabel>Category Name (10)</HorizonsLocalLabel>
      <GlassWindowFrame
        name={HorizonsLocalContainer.name}
        className='h-[300px] w-[full] flex-shrink-0'
      >
        <GlassWindowContents className={`flex h-full w-full flex-col`}>
          <HorizonsLocalRow />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
