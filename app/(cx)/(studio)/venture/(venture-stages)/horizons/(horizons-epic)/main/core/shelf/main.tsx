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
      className='w-[500px] flex-shrink-0 h-full'
      borderFx={borderFx['border-r']}
    >
      <GlassWindowContents className={`flex w-full h-full`}>
        <div className='flex w-full flex-col'>
          <div className='flex h-[60px] flex-shrink-0 flex-row items-center px-[2rem]'>
            <p className='ml-[0.5rem] font-extraBold text-lg text-slate-500'>
              List Name
            </p>
          </div>
          <div className={`flex w-full flex-col space-y-[1rem] overflow-auto px-[2rem] pb-[3rem]`}>
            <Horizon />
            <Horizon />
            <Horizon />
            <Horizon />
            <Horizon />
            <Horizon />
            <Horizon />
            <Horizon />
            <Divider dividerFx="h-[5px] mt-[2rem]"/>
          </div>
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
