'use client';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { borderFx } from '@/(design)/(fx)/data';
import { Horizon } from './move/main';
import { Divider } from '@/(components)/(line)/divider/main';

export function VentureShelf() {
  return (
    <GlassWindowFrame
      name={VentureShelf.name}
      className='w-[500px] flex-shrink-0'
      borderFx={borderFx['border-r']}
    >
      <GlassWindowContents
        className={`flex h-full w-full flex-col space-y-[3rem] p-[2rem]`}
      >
        <Horizon />
        <Horizon />
        <Horizon />
        <Divider/>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
