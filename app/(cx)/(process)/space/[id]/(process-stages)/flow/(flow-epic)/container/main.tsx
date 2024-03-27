import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, containerStyles, roundedStyles } from '@/(design)/(styles)/data';
import React from 'react';

export function FlowContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      displayName={FlowContainer.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      glassStyle={glassStyles['glass-5']}
      roundedStyle={roundedStyles['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
