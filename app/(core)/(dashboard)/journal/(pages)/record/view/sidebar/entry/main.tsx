import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import React from 'react';

export function JournalRecordSidebarEntry({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name='temp'
      borderFx={borderFx['border-around']}
      className='p-[1rem]'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowPane glassFx={glassFx['glass-5']} />
      <GlassWindowContents className='flex flex-row'>
        {children}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
