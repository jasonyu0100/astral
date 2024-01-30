import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import React from 'react';

export function CollectionController({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={CollectionController.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']} px-[2rem] py-[2rem] space-y-[3rem] overflow-auto`}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      {children}
    </Layer>
  );
}
