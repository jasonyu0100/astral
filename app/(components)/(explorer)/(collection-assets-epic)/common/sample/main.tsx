import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassStyles, borderStyles } from '@/(design)/(styles)/data';
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
      size='h-[200px] aspect-[32/16]'
      glass={glassStyles['glass-10']}
    >
      {children}
    </GlassAreaContainer>
  );
}
