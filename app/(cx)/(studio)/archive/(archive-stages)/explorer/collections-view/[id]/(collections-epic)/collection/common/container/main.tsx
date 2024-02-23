import { Glass } from '@/(components)/layer/main';
import { backgroundStyles, borderStyles } from '@/(components)/styles/data';
import React from 'react';

export function CollectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Glass
      displayName={CollectionContainer.name}
      className='flex h-full w-full flex-row items-center'
      sizeStyle='h-[200px] aspect-[32/16]'
      backgroundStyle={backgroundStyles['glass-10']}
      borderStyle={`${borderStyles['border-all']}`}
    >
      {children}
    </Glass>
  );
}
