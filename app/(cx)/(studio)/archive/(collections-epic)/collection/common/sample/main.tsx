import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { glassStyles, borderStyles } from '@/(design)/(styles)/data';
import React from 'react';

export function CollectionSample({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassContainer
      displayName={CollectionSample.name}
      className='flex h-full w-full flex-row items-center'
      sizeStyle='h-[200px] aspect-[32/16]'
      glassStyle={glassStyles['glass-10']}
    >
      {children}
    </GlassContainer>
  );
}
