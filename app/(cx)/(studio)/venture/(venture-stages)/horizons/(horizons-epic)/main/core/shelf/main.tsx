'use client';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { borderStyles } from '@/(design)/(styles)/data';
import { Horizon } from './move/main';
import { Divider } from '@/(components)/(line)/divider/main';

export function VentureShelf() {
  return (
    <GlassWindowFrame
      name={VentureShelf.name}
      className='w-[500px] flex-shrink-0'
      border={borderStyles['border-r']}
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
