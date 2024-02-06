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
      sizeStyle='h-[200px] aspect-[32/16]'
      backgroundStyle={backgroundStyles['glass-10']}
      borderStyle={`${borderStyles.rounded} ${borderStyles['border-all']}`}
    >
      <div className='flex h-full w-full flex-row items-center'>{children}</div>
    </Layer>
  );
}
