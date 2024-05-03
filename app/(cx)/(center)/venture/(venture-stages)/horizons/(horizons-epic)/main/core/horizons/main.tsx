'use client';
import { GlassWindowContents } from '@/(pkgs)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(pkgs)/(glass)/window/main';
import { borderFx } from '@/(fx)/data';
import { Horizon } from './list/horizon/main';
import { Divider } from '@/(pkgs)/(line)/divider/main';
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
