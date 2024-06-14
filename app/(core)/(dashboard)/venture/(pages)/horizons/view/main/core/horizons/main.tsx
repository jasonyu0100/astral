'use client';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { borderFx } from '@/(style)/data';
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
