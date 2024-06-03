import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, roundedFx, borderFx } from '@/(style)/data';
import React from 'react';

export function DraftContainer({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={DraftContainer.name}
      sizeFx='h-full flex-grow'
      className={`$flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
