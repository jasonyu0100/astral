'use client';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { borderFx } from '@/(design)/(fx)/data';
import { Horizon } from './list/horizon/main';
import { Divider } from '@/(components)/(line)/divider/main';
import { HorizonsList } from './list/main';
import { HorizonsListLabel } from './label/main';

export function HorizonsListContainer() {
  return (
    <GlassWindowFrame
      name={HorizonsListContainer.name}
      className='h-full w-[500px] flex-shrink-0'
      borderFx={borderFx['border-r']}
    >
      <GlassWindowContents className={`flex h-full w-full flex-col`}>
        <HorizonsListLabel>List Name</HorizonsListLabel>
        <HorizonsList />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
