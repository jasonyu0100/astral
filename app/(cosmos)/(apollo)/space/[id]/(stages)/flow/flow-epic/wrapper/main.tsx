import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import React from 'react';

export function FlowWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={FlowWrapper.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      {children}
    </Layer>
  );
}
