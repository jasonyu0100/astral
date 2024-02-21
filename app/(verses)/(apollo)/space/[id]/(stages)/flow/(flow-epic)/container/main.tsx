import { Glass } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import React from 'react';

export function FlowContainer({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={FlowContainer.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      {children}
    </Glass>
  );
}
