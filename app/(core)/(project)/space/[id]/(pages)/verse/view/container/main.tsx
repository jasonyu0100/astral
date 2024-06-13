import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, roundedFx, borderFx } from '@/(style)/data';
import React from 'react';

export function VerseContainer({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={VerseContainer.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
