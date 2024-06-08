import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, roundedFx, glassFx } from '@/(style)/data';
import React from 'react';
import { ColorfulText } from '@/(components)/(text)/colorful/main';

export function SidebarEntry({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name='temp'
      borderFx={borderFx['border-around']}
      className='min-h-[10rem] bg-black p-[1rem]'
    >
      <GlassWindowContents className='flex flex-row'>
        <ColorfulText seed={children?.toString()}>
          {children?.toString()}
        </ColorfulText>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
