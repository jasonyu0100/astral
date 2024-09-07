'use client';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { VentureHorizonsListLabel } from './label/main';
import { VentureHorizonsList } from './list/main';

export function HorizonsListContainer() {
  return (
    <div className='flex flex-col p-[2rem]'>
      <VentureHorizonsListLabel>Cluster Name (10)</VentureHorizonsListLabel>
      <GlassWindowFrame
        name={HorizonsListContainer.name}
        className='h-[300px] w-[full] flex-shrink-0'
      >
        <GlassWindowContents className={`flex h-full w-full flex-col`}>
          <VentureHorizonsList />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
