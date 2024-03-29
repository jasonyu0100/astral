'use client';
import { GlassWindowContents } from '@/(components)/(basic)/glass/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(basic)/glass/window/main';
import { borderStyles } from '@/(design)/(styles)/data';
import { Horizon } from './move/main';
import { Divider } from '@/(components)/(basic)/divider/main';

export function VentureShelf() {
  return (
    <GlassWindowFrame
      className='w-[500px] flex-shrink-0'
      borderStyle={borderStyles['border-r']}
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
