import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import React from 'react';

export function SpaceFlowContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={SpaceFlowContainer.name}
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
