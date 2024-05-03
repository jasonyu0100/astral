import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';
import { glassFx, borderFx } from '@/(fx)/data';
import React from 'react';

export function CollectionSample({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={CollectionSample.name}
      className='flex h-full w-full flex-row items-center'
      sizeFx='h-[200px] aspect-[32/16]'
      glassFx={glassFx['glass-10']}
    >
      {children}
    </GlassAreaContainer>
  );
}
