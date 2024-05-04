import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';
import { glassFx, containerFx, borderFx, roundedFx } from '@/(fx)/data';
import React from 'react';

export function ArcSidebar() {
  return (
    <GlassAreaContainer
      name={ArcSidebar.name}
      sizeFx='max-w-[500px] min-w-[250px] w-1/4 h-full flex-shrink-0'
      className={`${containerFx['col']} space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <GlassWindowFrame
        name='temp'
        borderFx={borderFx['border-all']}
        roundedFx={roundedFx.rounded}
        className='p-[1rem]'
      >
        <GlassWindowContents className='flex flex-row'>
          <p className='text-white'>1. Decision XYZ</p>
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
          <p className='text-white'>2. Second</p>
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
          <p className='text-white'>3. Third</p>
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
          <p className='text-white'>4. Fourth</p>
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
          <p className='text-white'>5. Fifth</p>
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
          <p className='text-white'>AI</p>
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
          <p className='text-white'>IT</p>
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
          <p className='text-white'>Propose Decision +</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </GlassAreaContainer>
  );
}
