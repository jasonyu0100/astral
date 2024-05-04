'use client';
import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { borderFx, glassFx } from '@/(fx)/data';
import { Horizon } from './list/horizon/main';
import { Divider } from '@/(lib)/(line)/divider/main';
import { HorizonsList } from './list/main';
import { HorizonsListLabel } from './label/main';

export function HorizonsListContainer() {
  return (
    <GlassWindowFrame
      name={HorizonsListContainer.name}
      className='h-[500px] w-[full] flex-shrink-0 p-[2rem]'
      borderFx={borderFx['border-r']}
    >
      <GlassWindowContents className={`flex h-full w-full flex-col`}>
        <HorizonsListLabel>List Name</HorizonsListLabel>
        <HorizonsList />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
