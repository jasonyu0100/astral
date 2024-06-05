'use client';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { borderFx, glassFx } from '@/(style)/data';
import { Horizon } from './list/horizon/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
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
