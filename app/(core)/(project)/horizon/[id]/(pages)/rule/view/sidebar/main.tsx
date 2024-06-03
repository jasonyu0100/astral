import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, borderFx, roundedFx } from '@/(style)/data';
import React from 'react';

export function RuleSidebar() {
  return (
    <GlassAreaContainer
      name={RuleSidebar.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-r']}
    >
      <GlassWindowFrame
        name='temp'
        borderFx={borderFx['border-all']}
        roundedFx={roundedFx.rounded}
        className='p-[1rem]'
      >
        <GlassWindowContents className='flex flex-row'>
          <p className='text-white'>1. Dress Code</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
      <GlassWindowFrame
        name='temp'
        borderFx={borderFx['border-all']}
        roundedFx={roundedFx.rounded}
        className='p-[1rem]'
      >
        <GlassWindowContents className='flex flex-row'>
          <p className='text-white'>2. Colors</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
      <GlassWindowFrame
        name='temp'
        borderFx={borderFx['border-all']}
        roundedFx={roundedFx.rounded}
        className='p-[1rem]'
      >
        <GlassWindowContents className='flex flex-row'>
          <p className='text-white'>3. Locations</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </GlassAreaContainer>
  );
}
