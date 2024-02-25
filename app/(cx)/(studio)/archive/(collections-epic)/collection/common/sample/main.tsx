import { Glass } from '@/(components)/(basic)/glass/main';
import { backgroundStyles, borderStyles } from '@/(design)/(styles)/data';
import React from 'react';

export function CollectionSample({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Glass
      displayName={CollectionSample.name}
      className='flex h-full w-full flex-row items-center'
      sizeStyle='h-[200px] aspect-[32/16]'
      backgroundStyle={backgroundStyles['glass-10']}
    >
      {children}
    </Glass>
  );
}
