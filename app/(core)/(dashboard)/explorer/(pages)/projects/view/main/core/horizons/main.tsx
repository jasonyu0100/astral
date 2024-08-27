'use client';
import { borderFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { VentureHorizonsListLabel } from './label/main';
import { VentureHorizonsList } from './list/main';

export function HorizonsListContainer() {
  return (
    <GlassWindowFrame
      name={HorizonsListContainer.name}
      className='h-[500px] w-[full] flex-shrink-0 p-[2rem]'
      borderFx={borderFx['border-r']}
    >
      <GlassWindowContents className={`flex h-full w-full flex-col`}>
        <VentureHorizonsListLabel>List Name</VentureHorizonsListLabel>
        <VentureHorizonsList />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
