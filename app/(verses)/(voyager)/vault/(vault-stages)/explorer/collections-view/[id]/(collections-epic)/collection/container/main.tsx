import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, borderStyles } from '@/(common)/styles/data';
import React from 'react';

export function GalleryCollectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={GalleryCollectionContainer.name}
      className='flex h-full w-full flex-row items-center'
      sizeStyle='h-[200px] aspect-[40/16]'
      backgroundStyle={backgroundStyles['glass-10']}
      borderStyle={`${borderStyles['border-all']}`}
    >
      {children}
    </Layer>
  );
}
