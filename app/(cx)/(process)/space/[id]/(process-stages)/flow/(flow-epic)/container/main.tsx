import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassStyles, containerStyles, roundedStyles } from '@/(design)/(styles)/data';
import React from 'react';

export function FlowContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={FlowContainer.name}
      size='h-full flex-grow'
      className={`${containerStyles['row']}`}
      glass={glassStyles['glass-5']}
      rounded={roundedStyles['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
